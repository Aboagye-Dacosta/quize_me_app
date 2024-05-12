import styled from "styled-components";

import Heading from "../../ui/Heading";
import AppHeaderBg from "./AppHeaderBg";
import AppThemeToggle from "./AppThemeToggle";

const StyledAppHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-100);
  margin-bottom: 5rem;

  @media screen and (min-width: 56.25em) {
    padding: 2rem 10rem;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1.5rem;
`;

const StyledHeading = styled(Heading)`
  font-size: 4rem;
  background: var(--bg-brand);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: center;
`;



function AppHeader() {
 

  return (
    <StyledAppHeader>
      <AppHeaderBg />

      <StyledLogo>
        <img src="/assets/images/favicon.png" alt="logo" />
        <StyledHeading as="h1"> QUIZ-me</StyledHeading>
      </StyledLogo>
      <AppThemeToggle/>
     
    </StyledAppHeader>
  );
}

export default AppHeader;
