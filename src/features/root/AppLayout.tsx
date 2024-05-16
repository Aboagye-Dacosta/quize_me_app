import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import ErrorContextProvider from "../../context/ErrorContext";
import ThemeContextProvider from "../../context/ThemeContext";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import AppBody from "./AppBody";
import AppHeader from "./AppHeader";

const StyledAppLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [localLocation, setLocalLocation] = useLocalStorageState(
    location.pathname,
    "pathname"
  );
  

  useEffect(() => {
    if (localLocation && location.pathname !== localLocation) {
      setLocalLocation(location.pathname);
    }
 return () => {
      localStorage.clear();
    };
  }, [localLocation, location, navigate, setLocalLocation]);


  useEffect(()=>{
    if(localLocation){
      navigate(localLocation)
    }
  },[])

  return (
    <ErrorContextProvider>
      <ThemeContextProvider>
        <StyledAppLayout>
          <AppHeader />
          <AppBody />
        </StyledAppLayout>
      </ThemeContextProvider>
    </ErrorContextProvider>
  );
}

export default AppLayout;
