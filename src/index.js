import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { DOMAIN, CLIENT_ID, AUDIENCE } from "./config/config";

const providerConfig = {
  domain: DOMAIN,
  clientId: CLIENT_ID,
  audience: AUDIENCE,
  redirectUri: window.location.origin,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
