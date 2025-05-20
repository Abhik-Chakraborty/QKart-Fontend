import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import Login from "./components/Login";
import Product from "./components/Products";
import { Switch, Route } from "react-router-dom";

export const config = {
  endpoint: `https://qtrip-backend-szb4.onrender.com`,
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Product />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
