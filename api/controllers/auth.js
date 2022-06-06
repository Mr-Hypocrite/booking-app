import user from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      password: hash
    });
    await newUser.save()
    res.status(200).json("user created");
  } catch (err) {
    next(err)
  }
}


export const login = async (req, res, next) => {
  try {
    const userLogin = await user.findOne({ username: req.body.username });
    if (!userLogin) return next("no user found");
    const isMatch = bcrypt.compare(req.body.password, userLogin.password);
    if (!isMatch) return next("password incorrect");

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
    console.log(token)
    const { password, isAdmin, ...otherDetails } = userLogin._doc;
    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json(otherDetails);
  } catch (err) {
    next(err)
  }
}



