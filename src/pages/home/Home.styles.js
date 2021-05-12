import styled from "styled-components";

export const Wrapper = styled.ul`
  display: grid;
  padding: 10px;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px 20px;

  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
`;
