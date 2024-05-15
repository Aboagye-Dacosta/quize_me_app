import styled, { css } from "styled-components";

const Display = styled.div<{ type: string }>`
  display: flex;
`;

const Row = styled(Display).attrs(({ type }) => ({
  type: type || "vertical",
}))`
  display: flex;

  ${(props) => {
    switch (props.type) {
      case "horizontal":
        return css`
          align-items: center;
          justify-content: space-between;
          gap: 1.2rem;
        `;
      case "vertical":
        return css`
          flex-direction: column;
          gap: 1.6rem;
        `;
    }
  }}
`;

export default Row;
