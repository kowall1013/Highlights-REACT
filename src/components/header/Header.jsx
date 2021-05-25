import { Link } from "react-router-dom";

import { Wrapper } from "./Header.styles";

function Header() {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">He</Link>
          </li>
          <li>s.</Link>
          </li>
          <li>
            <Link to="/germany">Gerny..</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}

export default Header;
