import styled from "styled-components";
import Header from "./Header";
import ChartMain from "./ChartMain";

const StyledMain = styled.main`
  width: 90%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

function Main() {
  return (
    <StyledMain>
      <Header />
      <ChartMain />
    </StyledMain>
  );
}

export default Main;
