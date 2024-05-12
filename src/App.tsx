import { ErrorInfo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./features/root/AppLayout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import Subjects from "./pages/Subjects";
import { getData } from "./services/getData";
import ErrorFallback from "./ui/ErrorFallback";

const logError = (error: Error, info: ErrorInfo) => {
  console.log("error");
  console.error(error);
  console.log("stack");
  console.log(info);
};

const client = new QueryClient();

client.prefetchQuery({
  queryKey: ["quiz"],
  queryFn: getData,
});

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Subjects />} />
              <Route path="/:subject" element={<Quiz />} />
              <Route path="/:subject/results" element={<QuizResults />} />
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
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
