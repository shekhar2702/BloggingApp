import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetail from "./BlogDetail";
import PageNotFound from "./PageNotFound";
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
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
// for any route other than above routes / if page is not found then this will redirect to the below component.