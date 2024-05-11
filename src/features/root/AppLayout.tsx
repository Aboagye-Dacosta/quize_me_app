import styled from "styled-components";

import AppBody from "./AppBody";
import AppHeader from "./AppHeader";

const StyledAppLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <AppHeader />
      <AppBody />
    </StyledAppLayout>
  );
}

export default AppLayout;
