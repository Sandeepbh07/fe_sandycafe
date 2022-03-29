import Routers from "./components/Routes/Routers";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const renderApp = () => {
    return <Routers />;
  };
  return <div>{renderApp()}</div>;
}

export default App;
