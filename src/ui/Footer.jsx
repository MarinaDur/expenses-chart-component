import styled from "styled-components";
import { Paragraph, StyledSpan } from "./Paragraph";
import { data } from "../data/data";

const StyedFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1rem;
`;

function Footer() {
  const sum = data.reduce((acc, curr) => acc + curr.amount, 0);
  console.log(sum);
  return (
    <StyedFooter>
      <div>
        <Paragraph type="footer" size="small">
          Total this month
        </Paragraph>
        <Paragraph type="body" size="big">
          {`$${sum}`}
        </Paragraph>
      </div>
      <Paragraph type="body" size="small-wide" align="right">
        +2.4% <StyledSpan>from last month</StyledSpan>
      </Paragraph>
    </StyedFooter>
  );
}

export default Footer;
