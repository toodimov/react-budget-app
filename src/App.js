import "./bundle.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddNewTransaction from "./pages/AddNewTransaction";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/" exact>
            <Dashboard />
          </Route>

          <Route path="/add" exact>
            <AddNewTransaction />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
