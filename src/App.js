import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Frienddetail from "./components/Frienddetail/Frienddetail";
import Home from "./components/Home/Home";
import Nomatch from "./components/Nomatch/Nomatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/friend/:id">
          <Frienddetail></Frienddetail>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Nomatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
