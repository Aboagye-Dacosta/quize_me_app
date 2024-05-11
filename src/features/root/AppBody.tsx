import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledAppBody = styled.div`
    padding: 0 2rem;
`;

function AppBody() {
  return (
    <StyledAppBody>
      <Outlet />
    </StyledAppBody>
  );
}

export default AppBody;
