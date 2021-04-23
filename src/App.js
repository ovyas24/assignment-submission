import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Default from "./components/404";
import AddProduct from "./components/AddProduct";
import Admin from "./components/main";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/addProduct" >
          {localStorage.getItem("token") ? <AddProduct /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
        
        <Route path="/" exact>
          {localStorage.getItem("token") ? <Admin /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
        <Route path="/login" exact>
          {localStorage.getItem("token") ? <Redirect to={{ pathname: "/admin" }} /> : <Login />}
        </Route>
        <Route path="/register" exact>
          {localStorage.getItem("token") ? <Redirect to={{ pathname: "/admin" }} /> : <Register />}
        </Route>
        <Route path="*" component={Default} />
      </Switch>
    </Router>
  );
}

export default App;
