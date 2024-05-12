import { createContext, useContext, useReducer } from "react";

interface Payload {
  [key: string]: string | number | object | boolean | null;
}

type QuizState = {
  answer: string | null;
  currentQuestion: number;
  selectedAnswer: string | null;
  cumScore: number;
  answeredQuestion: number[];
  isCorrectAnswer: boolean | null;
  pageState: "initial" | "start" | "complete";
};

type Action = {
  type: string;
  payload?: Payload | null;
};

type QuizContextType = {
  quizState: QuizState;
  dispatch: React.Dispatch<Action>;
};

const QuizContext = createContext<QuizContextType | null>(null);

const initState: QuizState = {
  answer: null,
  currentQuestion: 0,
  cumScore: 0,
  selectedAnswer: null,
  answeredQuestion: [],
  isCorrectAnswer: null,
  pageState: "initial",
};

const reducer = (state: QuizState, action: Action): QuizState => {
  const payload = action?.payload;
  switch (action.type) {
    case "/initial":
      return {
        ...initState,
      };
    case "/start":
      return {
        ...state,
        currentQuestion: 0,
        pageState: "start",
      };
    case "/start/select":
      return {
        ...state,
        selectedAnswer: payload!.selectedAnswer,
      };
    case "/start/submit":
      return {
        ...state,
        cumScore:
          state.answer === state.selectedAnswer
            ? state.cumScore + 1
            : state.cumScore,
        isCorrectAnswer: state.answer === state.selectedAnswer,
      };
    case "/start/next":
      return {
        ...initState,
        currentQuestion: Math.min(state!.currentQuestion + 1, 10),
        cumScore: state.cumScore,
      };

    case "/complete":
      return {
        ...state,
        pageState: "complete",
      };

    default:
      throw new Error("action not found");
  }
};

function useQuizContext() {
  const [quizState, dispatch] = useReducer(reducer, initState);

  return {
    quizState,
    dispatch,
  };
}

export default function QuizContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuizContext.Provider value={useQuizContext()}>
      {children}
    </QuizContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context)
    throw new Error("quiz context was use outside of quiz provider");

  return context;
}
