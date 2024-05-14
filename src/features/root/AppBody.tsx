import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ErrorAlert from "../../ui/ErrorAlert";

const StyledAppBody = styled.div`
    padding: 0 2rem;
`;

function AppBody() {
  return (
    <StyledAppBody>
      <ErrorAlert/>
      
      <Outlet />
    </StyledAppBody>
  );
}

export default AppBody;
