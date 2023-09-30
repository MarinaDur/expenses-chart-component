import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${(props) =>
    props.size === "small" || props.size === "small-wide"
      ? "1.3rem"
      : props.size === "medium"
      ? "2.1rem"
      : "2.5rem"};
  color: ${(props) =>
    props.type === "header"
      ? "var(--color-neutral-very-pale-orange)"
      : props.type === "body"
      ? "var(--color-neutral-dark-brown)"
      : "var(--color-neutral-medium-brown)"};

  font-weight: ${(props) => (props.size === "small" ? "400" : "700")};
  text-align: ${(props) => (props.align === "right" ? "right" : "left")};
`;

const StyledSpan = styled.span`
  display: block;
  font-size: 13px;
  color: var(--color-neutral-medium-brown);
  font-weight: 400;
`;

export { Paragraph, StyledSpan };
