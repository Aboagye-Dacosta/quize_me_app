import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useQuiz } from "../../context/QuizContext";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { getSubjectQuestionsLen } from "../../services/dataApi";

function Time({ time }: { time: number }) {
  const hr = Math.floor(time / (60 * 60));
  const min = Math.floor((time - hr * 60 * 60) / 60);
  const secs = time - (hr * 60 * 60 + min * 60);

  return (
    <div>
      {hr !== 0 && String(hr).padStart(2, "0") + " " + ":" + " "}
      {min !== 0 && String(min).padStart(2, "0") + " " + ":" + " "}
      {String(secs).padStart(2, "0")}{" "}
    </div>
  );
}

function QuizTimer() {
  const { subject } = useParams();
  const { dispatch } = useQuiz();
  const questionsLen = getSubjectQuestionsLen(subject!);

  const [localState, setLocalState] = useLocalStorageState(
    questionsLen * 60 * 2,
    "timer"
  );

  const [timeRemaining, setTimeRemaining] = useState<number>(
    localState as number
  );

  useEffect(() => {
    let interval: number | undefined = undefined;

    if (timeRemaining !== 0) {
      interval = setInterval(() => {
        setTimeRemaining((state) => state - 1);
      }, 1000);

      setLocalState(timeRemaining);
    }

    if (timeRemaining === 0) {
      dispatch({ type: "/complete" });
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining, setTimeRemaining, dispatch, setLocalState]);

  return <Time time={timeRemaining} />;
}

export default QuizTimer;
