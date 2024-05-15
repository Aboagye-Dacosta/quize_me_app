import { createContext, useContext, useReducer } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface Payload {
  [key: string]: string | number | object | boolean | null;
}

type QuizState = {
  currentQuestion: number;
  selectedAnswer: string | null;
  cumScore: number;
  isCorrectAnswer: boolean | null;
  pageState: "initial" | "start" | "complete";
  hasAnswered: boolean;
  hasSelected: boolean;
  fromLocal: boolean;
};

type Action = {
  type: string;
  payload?: Payload;
};

type QuizContextType = {
  quizState: QuizState;
  dispatch({ type, payload }: Action): void;
};

const QuizContext = createContext<QuizContextType | null>(null);

const initState: QuizState = {
  currentQuestion: 0,
  cumScore: 0,
  selectedAnswer: null,
  isCorrectAnswer: null,
  pageState: "initial",
  hasAnswered: false,
  hasSelected: false,
  fromLocal: false,
};

function reducer( state: QuizState, action: Action): QuizState {
  const payload = action?.payload;
  let newState: QuizState | null = null;

  switch (action.type) {
    case "/initial":
      newState = {
        ...initState,
      };
      break;
    case "/start":
      newState = {
        ...state,
        currentQuestion: 0,
        pageState: "start",
        fromLocal: false,
      };
      break;
    case "/start/select":
      newState = {
        ...state,
        //@ts-expected-error the code is ok
        selectedAnswer: payload!.selectedAnswer as string | null,
        hasSelected: true,
        fromLocal: false,
      };
      break;
    case "/start/submit":
      newState = {
        ...state,
        cumScore:
          payload!.answer === state.selectedAnswer
            ? state.cumScore + 1
            : state.cumScore,
        isCorrectAnswer: payload!.answer === state.selectedAnswer,
        hasAnswered: true,
        fromLocal: false,
      };
      break;
    case "/start/next":
      newState = {
        ...initState,
        pageState: "start",
        currentQuestion: Math.min(
          state!.currentQuestion + 1,
          //@ts-expect-error the code is valid
          payload!.questionsLen - 1
        ),
        cumScore: state.cumScore,
      };
      break;

    case "/complete":
      newState = {
        ...state,
        pageState: "complete",
        fromLocal: false,
      } 
      break;

    default:
      throw new Error("action not found");
  }

  //@ts-expect-error this is expected
  this.setLocalState(newState);
  return newState as QuizState;
}

function useQuizContext() {
  const [localState, setLocalState] = useLocalStorageState(initState, "quiz");

  const [quizState, dispatchAction] = useReducer(
    reducer.bind({ setLocalState }),
    initState,
    (initState) => {
      if (Object.keys(localState).length > 0)
        return { ...(localState as QuizState), fromLocal: true };
      return initState;
    }
  );

  const dispatch = ({ type, payload }: { type: string; payload?: Payload }) => {
    dispatchAction({ type, payload });

    // setLocalState(quizState);
  };

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
