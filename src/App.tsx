import { ErrorInfo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./features/root/AppLayout";

import Quiz from "./pages/Quiz";
import Subjects from "./pages/Subjects";

import ErrorFallback from "./ui/ErrorFallback";

const logError = (error: Error, info: ErrorInfo) => {
  console.log("error");
  console.error(error);
  console.log("stack");
  console.log(info);
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Subjects />} />
            <Route path="/:subject" element={<Quiz />} />
          </Route>
          <Route
            path="/*"
            element={
              <ErrorFallback
                error={
                  new Error("the page you are looking for is not available")
                }
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
