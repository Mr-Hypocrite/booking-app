export const verifyToken = async (req, res, next) => {
  const token = req.cookie.access_token;
  if (!token) {
    return next("no token found");
  }
  jwt.varify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(err);
    req.user = user;
    next();
  })
}

const verifyUser = async (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id == req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(err);
    }
  })
}