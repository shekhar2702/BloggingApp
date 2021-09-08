import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
//We add exact to find the exact matched route otherwise any substring of a different route can match with any other route which contains the substring.
//Switch finds the first match and it scans fom top to bottom.
//Eg:-If our first rote within switch was "/" and second route was "/create" then switch will goto "/" instead of "/create" and hence we use exact to find exact matches.
