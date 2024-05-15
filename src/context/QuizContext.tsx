import { createContext, useContext, useReducer } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

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
  hasAnswered: boolean;
  hasSelected: boolean;
  fromLocal: boolean;
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
  hasAnswered: false,
  hasSelected: false,
  fromLocal: false, 
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
        fromLocal: false,
      };
    case "/start/select":
      return {
        ...state,
        selectedAnswer: payload!.selectedAnswer,
        hasSelected: true,
        fromLocal:false,
      };
    case "/start/submit":
      return {
        ...state,
        cumScore:
          payload.answer === state.selectedAnswer
            ? state.cumScore + 1
            : state.cumScore,
        isCorrectAnswer: payload.answer === state.selectedAnswer,
        hasAnswered: true,
        fromLocal: false
      };
    case "/start/next":
      return {
        ...initState,
        pageState: "start",
        currentQuestion: Math.min(
          state!.currentQuestion + 1,
          payload!.questionsLen - 1
        ),
        cumScore: state.cumScore,
      };

    case "/complete":
      return {
        ...state,
        pageState: "complete",
        fromLocal:false,
      };

    default:
      throw new Error("action not found");
  }
};

function useQuizContext() {
  const [localState, setLocalState] = useLocalStorageState(initState, "quiz");

  const [quizState, dispatchAction] = useReducer(
    reducer,
    initState,
    (initState) => {
      if (Object.keys(localState).length > 0) return { ...(localState as QuizState), fromLocal: true };
      return initState;
    }
  );

  const dispatch = ({ type, payload }: { type: string; payload?: Payload }) => {
    dispatchAction({ type, payload });
 
    setLocalState(quizState);
  };

  return {
    quizState,
    dispatch,
    setLocalState,
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
