import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
// - Router is placed at the root component App.
// - We place the router around the main div which renders the entire app in this case it's the div with className = "App"
//Switch basically matches the route and visits to a component in the ,atched route.
