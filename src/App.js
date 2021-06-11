import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route  path="/" component={UserList} exact />
          <Route
            exact
            path="/profile/:id"
            render={(props) => <Details {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
