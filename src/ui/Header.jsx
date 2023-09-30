import styled from "styled-components";
import { Paragraph } from "./Paragraph";

const StyledHeader = styled.div`
  background: var(--color-primary-soft-red);
  color: var(--color-neutral-very-pale-orange);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
`;

const StyledImage = styled.img`
  width: 55px;
  height: 55px;
`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <Paragraph type="header" size="small">
          My Balance
        </Paragraph>
        <Paragraph type="header" size="medium">
          $921.48
        </Paragraph>
      </div>
      <StyledImage src="logo.svg" alt="logo"></StyledImage>
    </StyledHeader>
  );
}

export default Header;
