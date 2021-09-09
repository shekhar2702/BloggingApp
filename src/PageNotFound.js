import { Link } from "react-router-dom";

let PageNotFound = () => (
  <div className="not-found">
    <h2>Sorry,page not found</h2>
    <p>404 Error,Not Found</p>
    <Link to="/">Go Back to home page</Link>
  </div>
);

export default PageNotFound;
