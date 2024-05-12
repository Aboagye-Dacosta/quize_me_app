import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledWelcome = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1.5rem;

 & p {
    font-size: 1.9rem;
    color: var(--color-grey-600);
    /* font-weight: bold; */
 }
`;

const StyledHeading = styled(Heading)`
  font-size: 7rem;
  color: var(--color-brand-900);
  line-height: 1.2;

  & span {
    text-transform: capitalize;
  }
`;

function Welcome() {
  return (
    <StyledWelcome>
      <StyledHeading>
        Welcome to the
        <br />
        <span>frontend quiz</span>
      </StyledHeading>
      <p >Pick a subject to get started</p>
    </StyledWelcome>
  );
}

export default Welcome;
