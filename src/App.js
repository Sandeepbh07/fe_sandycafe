import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "./api/user";
import Routers from "./components/Routes/Routers";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { CLAIMS_URI } from "./config/config";
function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const createUserHandler = async () => {
    if (isAuthenticated) {
      const loginCount = parseInt(user[`${CLAIMS_URI}/logins`]);
      if (loginCount <= 1) {
        const token = await getAccessTokenSilently();
        const result = await createUser(user, token);
        console.log(result.data);
      } else {
        console.log("User already present in our system");
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  useEffect(() => {
    createUserHandler();
  }, [isAuthenticated]); //eslint-disable-line react-hooks/exhaustive-deps
  const renderApp = () => {
    return <Routers />;
  };
  return <div>{renderApp()}</div>;
}

export default App;
