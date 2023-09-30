import styled from "styled-components";
import { data } from "../data/data";
import CustomToolTip from "./CustomToolTip";

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { getCurrentDayName } from "../utillis/calculateDate";
import { useState } from "react";

const StyledBody = styled.div`
  width: 100%;
  height: 250px;
  background: var(--color-neutral-very-pale-orange);
`;

function MyBarChart() {
  const [toolTipPos, setToolTipPos] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);

  function handleBarMouseOver(x, y, index) {
    setToolTipPos({ x, y });
    setActiveIndex(index);
  }

  function handleBarMouseLeave() {
    setActiveIndex(null);
  }

  function getColorName(index, dayName) {
    if (index === activeIndex && dayName === getCurrentDayName()) {
      return "var(--color-primary-cyan-hover)";
    } else if (index === activeIndex && dayName !== getCurrentDayName()) {
      return "var(--color-primary-soft-red-hover)";
    } else if (dayName === getCurrentDayName()) {
      return "var(--color-primary-cyan)";
    } else {
      return "var(--color-primary-soft-red)";
    }
  }

  return (
    <StyledBody>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          width={330}
          height={260}
          barSize={31}
          // barCategoryGap={8}
          margin={{
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            scale="point"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12, // Change font size
              fontFamily: "DM Sans, sans-serif", // Change font family
              fill: "var(--color-neutral-medium-brown)", // Change text color
              dy: 6, // Add margin between text and chart
            }}
          ></XAxis>
          <Tooltip
            content={activeIndex !== null ? <CustomToolTip /> : null}
            position={{ x: toolTipPos.x - 8, y: toolTipPos.y - 40 }}
            isAnimationActive={true}
            wrapperStyle={{ display: activeIndex !== null ? "block" : "none" }}
          />
          <Bar
            dataKey="amount"
            fill="var(--color-primary-soft-red)"
            radius={[3, 3, 3, 3]}
            onMouseOver={(e, index) => {
              handleBarMouseOver(e.x, e.y, index);
            }}
            onMouseLeave={handleBarMouseLeave}
          >
            {data.map((day, index) => (
              <Cell
                key={day.day}
                cursor="pointer"
                fill={getColorName(index, day.day)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledBody>
  );
}

export default MyBarChart;
