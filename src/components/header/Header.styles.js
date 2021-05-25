import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.82);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.72);

  nav {
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-evenly;
  }
  li {
    margin: 2rem 0;
    padding: 1rem 0.4rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-size: 2.1rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: #e76f51;
  }

  @media only screen and (min-width: 1200px) {
    li {
      margin: 2rem 5rem;
      padding: 1rem 0.4rem;
    }
    a {
      font-size: 3rem;
    }
  }
`;
