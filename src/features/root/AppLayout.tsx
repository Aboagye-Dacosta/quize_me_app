import styled from "styled-components";

import AppBody from "./AppBody";
import AppHeader from "./AppHeader";
import ThemeContextProvider from "../../context/ThemeContext";

const StyledAppLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

function AppLayout() {
  return (
    <ThemeContextProvider>
      <StyledAppLayout>
        <AppHeader />
        <AppBody />
      </StyledAppLayout>
    </ThemeContextProvider>
  );
}

export default AppLayout;
