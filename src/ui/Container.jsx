import styled from "styled-components";
import Main from "./Main";

const StyledMain = styled.div`
  background: var(--color-neutral-cream);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Container() {
  return (
    <StyledMain>
      <Main />
    </StyledMain>
  );
}

export default Container;
