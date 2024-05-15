import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./features/root/AppLayout";

import Quiz from "./pages/Quiz";
import Subjects from "./pages/Subjects";

import ErrorFallback from "./ui/ErrorFallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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
