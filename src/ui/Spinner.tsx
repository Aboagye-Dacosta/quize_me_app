import styled, { keyframes } from "styled-components";

const animation = keyframes`
    to{transform: rotate(1turn)}
`;

const Spinner = styled.span`
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--bg-brand);
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: ${animation} 1s infinite linear;
`;

export default Spinner;