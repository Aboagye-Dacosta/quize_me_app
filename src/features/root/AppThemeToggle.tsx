import { motion } from "framer-motion";
import styled from "styled-components";

import { useThem } from "../../context/ThemeContext";

const StyledThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & img {
    width: 3rem;
    height: auto;
  }
`;

const StyledSwitch = styled.div`
  position: relative;
  width: 5rem;
  height: 2rem;
  border: 2px solid var(--color-brand-900);
  border-radius: 2rem;

  & input {
    position: absolute;
    width: 5rem;
    height: 2rem;
    border-radius: 2rem;
    opacity: 0;

    z-index: 100;
  }
`;

const StyledCircleCommon = styled(motion.div)`
  background: var(--bg-brand);
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;

  position: absolute;
  top: 1px;
`;

const StyledCircle = styled(StyledCircleCommon)`
  left: 2px;
`;

const StyledSecondCircle = styled(StyledCircleCommon)`
  right: 2px;
`;

function AppThemeToggle() {
  const { isDarkMode, setIsDarkMode } = useThem();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <StyledThemeToggle>
      <img
        src={
          isDarkMode
            ? "/assets/images/icon-moon-light.svg"
            : "/assets/images/icon-moon-dark.svg"
        }
        alt="light"
      />
      <StyledSwitch>
        <input type="checkbox" onChange={toggleTheme} />
        {isDarkMode && <StyledCircle layoutId="toggle-circle" layout />}
        {!isDarkMode && <StyledSecondCircle layoutId="toggle-circle" layout />}
      </StyledSwitch>
      <img
        src={
          isDarkMode
            ? "/assets/images/icon-sun-dark.svg"
            : "/assets/images/icon-sun-light.svg"
        }
        alt="dark"
      />
    </StyledThemeToggle>
  );
}

export default AppThemeToggle;
