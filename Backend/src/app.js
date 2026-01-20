import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weather.routes.js";
import cacheRoutes from "./routes/cache.routes.js";
import { authMiddleware } from "./config/Auth.js";
import cookieParser from "cookie-parser";




const app = express();

// ----- Auth0 -----
app.use(authMiddleware); 


app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true               
}));
app.use(express.json());


app.use("/api/weather", weatherRoutes);


//for debugging cache status
app.use("/api/cache", cacheRoutes);



app.get('/logout', (req, res) => {
  res.oidc.logout({ returnTo: 'http://localhost:5173/' });
});

app.get('/callback', (req, res) => {
  // afterCallback in your config will handle redirect
  res.send("Callback hit");
});



export default app;
