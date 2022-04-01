export const API_BASE_URL = process.env.REACT_APP_API_SERVER_URL;

export const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;

export const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;

export const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

if (!API_BASE_URL) {
  throw new Error(
    ".env is missing the definition for REACT_APP_API_SERVER_URL environment variable"
  );
}

if (!TIMEOUT) {
  throw new Error(
    ".env is missing the definition for REACT_APP_API_TIMEOUT environment variable"
  );
}

if (!DOMAIN) {
  throw new Error(
    ".env is missing the definition for REACT_APP_AUTH0_DOMAIN environment variable"
  );
}

if (!CLIENT_ID) {
  throw new Error(
    ".env is missing the definition for REACT_APP_AUTH0_CLIENT_ID environment variable"
  );
}
