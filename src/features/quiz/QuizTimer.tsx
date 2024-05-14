import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSubjectQuestionsLen } from "../../services/dataApi";
import {useQuiz} from "../../context/QuizContext"

 

function Time({ time }: { time: number }) {
  const hr = Math.floor(time / (60 * 60));
  const min = Math.floor((time - (hr * 60 * 60)) / 60);
  const secs = time - ( (hr * 60 * 60) + (min * 60));

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
  const [timeRemaining, setTimeRemaining] = useState<number>(
    questionsLen * 60 * 2
  );

  useEffect(() => {
    let interval: number | undefined = undefined;

    if (timeRemaining !== 0) {
      interval = setInterval(() => {
        setTimeRemaining((state) => state - 1);
      }, 1000);
    }

    if(timeRemaining === 0){
        dispatch({type: "/complete"})
    }

    return () => {
      clearInterval(interval);
    };
      
  }, [timeRemaining, setTimeRemaining, dispatch]);

     
  return <Time time={timeRemaining} />;
}

export default QuizTimer;
