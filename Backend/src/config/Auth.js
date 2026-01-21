import { auth } from "express-openid-connect";
import dotenv from "dotenv";

dotenv.config();

const config = {
  authRequired: false,
  auth0Logout: true,

  secret: process.env.AUTH0_SECRET,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.BASE_URL,

  authorizationParams: {
    response_type: "code",
    redirect_uri: process.env.AUTH0_CALLBACK_URL
  },

  afterCallback: (req, res, session) => {
    return res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
  }
};

export const authMiddleware = auth(config);
