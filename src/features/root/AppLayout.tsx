import styled from "styled-components";
import {useEffect} from "react";

import AppBody from "./AppBody";
import AppHeader from "./AppHeader";
import ThemeContextProvider from "../../context/ThemeContext";
import ErrorContextProvider from "../../context/ErrorContext";

const StyledAppLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

function AppLayout() {

  useEffect(()=>{
    return ()=>{
      localStorage.clear();
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
