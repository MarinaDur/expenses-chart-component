import styled from "styled-components";

const StyledTTDiv = styled.div`
  background: var(--color-neutral-dark-brown);
  padding: 5.5px;
  text-align: center;
  border-radius: 3px;
  align-self: center;
`;

const StyledTTText = styled.p`
  font-size: 13px;
  color: var(--color-neutral-cream);
`;

function CustomToolTip(data) {
  const { active, payload } = data;
  if (active && payload && payload.length) {
    return (
      <StyledTTDiv>
        <StyledTTText>{`$${payload[0].value}`}</StyledTTText>
      </StyledTTDiv>
    );
  }
  return null;
}

export default CustomToolTip;
