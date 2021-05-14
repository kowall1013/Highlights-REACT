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
            <Link to="/germany">Germanyy</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}

export default Header;
