import { Link } from "react-router-dom";
//Link is used in place of a href and this will prevent making server requests for new routes.This is the entire point of single page applications.
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>My Thoughts</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
export default Navbar;
