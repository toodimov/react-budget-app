import "./bundle.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddNewTransaction from "./pages/AddNewTransaction";
import EditTransaction from "./pages/EditTransaction";
import { TransactionProvider } from "./contexts/TransactionContext";
import { auth } from "./config";
import { useState } from "react";
import Header from "./components/Header";
import { LinearProgress } from "@material-ui/core";

const Authenticated = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/login" exact>
          <Login />
        </Route> */}
        <>
          <Route path="/" exact>
            <Dashboard />
          </Route>

          <Route path="/add" exact>
            <AddNewTransaction />
          </Route>

          <Route path="**">
            <Redirect to="/" />
          </Route>

          <Route path="/edit/:id">
            <EditTransaction />
          </Route>
        </>
      </Switch>
    </Router>
  );
};

const Unauthenticated = () => {
  return (
    <Router>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Router>
  );
};

function App() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  if (user) {
    return <Authenticated />;
  } else {
    return <Unauthenticated />;
  }
}

export default App;
