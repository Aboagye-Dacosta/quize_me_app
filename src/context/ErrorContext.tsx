import { createContext, useContext, useState } from "react";


type ErrorType = {
  errorMessage: string | null;
  setErrorMessage(errorMessage: string | null): void;
};

const ErrorContext = createContext<ErrorType | null>(null);

export default function ErrorContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={{ errorMessage, setErrorMessage }}>
      {children}
    </ErrorContext.Provider>
  );
}

function useError() {
  const context = useContext(ErrorContext);
  if (!context)
    throw new Error("error context is being used outside of error provider");

  return context;
}



// eslint-disable-next-line react-refresh/only-export-components
export { useError };
