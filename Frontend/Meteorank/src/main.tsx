import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-vrfxr26got6onk2d.us.auth0.com"
        clientId="2iIQyxYJ93tXvPqutaMqVLLxLBDq8CFu"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "https://weather-api",
          scope: "openid profile email",
          prompt: "consent"
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);
