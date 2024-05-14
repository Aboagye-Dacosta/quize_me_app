import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledWelcome = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content:center;
 gap: 1.5rem;
 margin-bottom: 2rem; 

 & p {
    font-size: 1.9rem;
    color: var(--color-grey-600);
    text-align: center;
  }

  @media screen and (min-width: 56.25em){
    justify-content: start;
    align-items: start;
   & p {
      text-align: left;
    }
  }
`;

const StyledHeading = styled(Heading)`
  font-size:4rem;
  color: var(--color-brand-900);
  line-height: 1.2;
  text-align: center;

  & span {
    text-transform: capitalize;
  
  }



  @media screen and (min-width:37.5em){
    font-size: 5rem;
    text-align: left;
  }
  @media screen and (min-width:56.25em){
    font-size: 6rem;
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
