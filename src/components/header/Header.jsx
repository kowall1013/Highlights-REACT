import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/spanish">Spanish</Link>
          </li>
          <li>
            <Link to="/germany">Germany</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
