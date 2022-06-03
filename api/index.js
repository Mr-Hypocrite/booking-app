import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import roomRoute from "./routes/room.js";
import userRoute from "./routes/user.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express(); // create an instance of express


//connection to mongoose

const connect = async () => {
  try {

    await mongoose.connect(process.env.MONGOOSE)
    console.log('connected to mongoose')
  } catch (err) {
    throw (err);
  }
}
mongoose.connection.on('disconnected', () => {
  console.log("connected to mongoose")
})
mongoose.connection.on('connected', () => {
  console.log("connected to mongoose")
})



//Middleware
app.use(express.json());

app.use("/api/auth", authRoute); //middle ware for auth
app.use("/api/room", roomRoute); //middleware for room
app.use("/api/hotel", hotelRoute); //middleware for hotel
app.use("/api/user", userRoute); //middleware for user




app.get("/", (req, res) => {
  res.send("connected to express");
  connect();
  res.end();
})


app.listen(5000, () => {
  console.log("listing on port 5000");
})