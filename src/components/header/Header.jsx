import { Link } from "react-router-dom";

import { Wrapper } from "./Header.styles";

function Header() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Header;
