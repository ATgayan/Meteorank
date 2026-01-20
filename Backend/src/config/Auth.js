import { auth } from "express-openid-connect";


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'osiefhrohgeurghiurtgiur345784738t34t3g34g34g',
  clientSecret:'4GDNu64nphBZBSw5GhEJgf46r1C6ZfZ3E-V8Qs1Lvqbkfh03hfAZroIN-BMeFHJk',
  baseURL: 'http://localhost:8081',
  clientID: 'RwpTxQcg9EaYW0HA1yLWZnp6dgbhYrtK',
  issuerBaseURL: 'https://dev-vrfxr26got6onk2d.us.auth0.com',
  // Redirect after login
  authorizationParams: {
    response_type: "code",
    redirect_uri: "http://localhost:8081/callback" 
  },
 

  // Use afterCallback to redirect to frontend dashboard
  afterCallback: (req, res, session) => {
     return res.status(200).redirect("http://localhost:5173/dashboard");
  },
  
  
};


export const authMiddleware = auth(config);

