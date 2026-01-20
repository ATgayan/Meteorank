export const whitelistMiddleware = (req, res, next) => {
  const WHITELIST = [
    "user1@example.com",
    "user2@example.com",
    "thusitha.personal@gmail.com",
    "thusithagayan562@gmail.com",
    "gayan.youtiube@gmail.com"
  ];
  
  const user = req.oidc?.user;

  if (!user) {
    return res.oidc.login({ returnTo: "/dashboard" }); 
  }

  if (!WHITELIST.includes(user.email)) {
    return res.oidc.logout({ returnTo: "/" }); 
  }

  next();
};
