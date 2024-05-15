import styled from "styled-components";

import AppHeaderBg from "./AppHeaderBg";
import AppLogo from "./AppLogo";
import AppThemeToggle from "./AppThemeToggle";

const StyledAppHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-100);
  margin-bottom: 5rem;
  padding: 2rem;

  @media screen and (min-width: 56.25em) {
    padding: 2rem 10rem;
  }

  @media screen and (min-width: 75em) {
    padding: 2rem 20rem;
  }
`;

function AppHeader() {
  return (
    <StyledAppHeader>
      <AppHeaderBg />
      <AppLogo />

      <AppThemeToggle />
    </StyledAppHeader>
  );
}

export default AppHeader;
