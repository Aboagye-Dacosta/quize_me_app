import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ErrorAlert from "../../ui/ErrorAlert";

const StyledAppBody = styled.div`
    padding: 0 3rem;

    @media screen and (min-width: 37.5rem){
      padding: 0 10rem;
    }

    @media screen and (min-width: 75rem){
      padding: 0 20rem;
    }
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
