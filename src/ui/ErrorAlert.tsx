import { motion } from "framer-motion";
import styled from "styled-components";
import { useError } from "../context/ErrorContext";

import IconButton from "./IconButton";

const StyledErrorAlert = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;

  box-shadow: var(--shadow-md);
  max-width: 50rem;
  margin: 2rem auto;
  background-color: var(--color-red-100);
  border-radius: var(--border-radius-md);


    color: var(--color-red-800);
  
`;


// const variant = {
//     show: {
//         opacity: 1,
//         transition:  {
//             duration: "200ms"
//         }
//     },
//     hide: {
//         opacity: 0,
//     }
// }

function ErrorAlert() {
  const { errorMessage, setErrorMessage } = useError();

  console.log("from alert error", errorMessage);
  return (
    <>
      {errorMessage && (
        <StyledErrorAlert >
          <img src="/assets/images/icon-error.svg" alt="error" />
          <p>{errorMessage}</p>
          <IconButton onClick={() => setErrorMessage(null)}>&times;</IconButton>
        </StyledErrorAlert>
      )}
    </>
  );
}

export default ErrorAlert;
