import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./features/root/AppLayout";

import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import Subjects from "./pages/Subjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Subjects />} />
          <Route path="/:subject" element={<Quiz />} />
          <Route path="/:subject/results" element={<QuizResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
