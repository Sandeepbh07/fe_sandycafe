export const API_BASE_URL = process.env.REACT_APP_API_SERVER_URL;

export const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;

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
