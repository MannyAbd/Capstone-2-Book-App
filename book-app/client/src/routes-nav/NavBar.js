import { Link } from "react-router-dom";

function NavBar() {

    return (
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/login">
              login
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/register">
              register
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/books">
              Search Books
            </Link>
          </li>
        </ul>
        </nav>
    );
}

export default NavBar;
