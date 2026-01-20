// middlewares/requireAuth.js
export const requireAuth = (req, res, next) => {
  console.log("Auth Middleware Invoked");
  if (!req.oidc.isAuthenticated()) {
    return res.status(401).json({ message: "Login required" });
  }
  next();
};
