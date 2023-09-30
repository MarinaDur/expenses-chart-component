import styled from "styled-components";
import { Paragraph } from "./Paragraph";
import MyBarChart from "./MyBarChart";
import Hr from "./Hr";
import Footer from "./Footer";

const StyledChartMain = styled.div`
  background: var(--color-neutral-very-pale-orange);
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;

function ChartMain() {
  return (
    <StyledChartMain>
      <Paragraph size="medium" type="body">
        Spending - Last 7 days
      </Paragraph>
      <MyBarChart />
      <Hr />
      <Footer />
    </StyledChartMain>
  );
}

export default ChartMain;
