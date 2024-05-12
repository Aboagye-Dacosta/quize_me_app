import styled from "styled-components";

import Button from "./Button";
import Heading from "./Heading";

const StyledErrorFallback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  padding: 4rem;
  width: max-content;
  margin: 10rem auto;
  box-shadow: var(--shadow-md);

  & img {
    width: 5rem;
  }
`;

function ErrorFallback({ error }: { error: Error }) {
  return (
    <StyledErrorFallback>
      <img src="/assets/images/icon-error.svg" alt="Error" />
      <Heading>Well that was unexpected 🤔</Heading>

      <p>{error.message}</p>

      <Button as="a" href="/">
        Reset
      </Button>
    </StyledErrorFallback>
  );
}

export default ErrorFallback;
