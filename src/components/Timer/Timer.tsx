import { useContext } from "react";
import { QuizContext } from "../../store/QuizContext/QuizContext";

export const Timer = () => {
  const { state } = useContext(QuizContext);

  return (
    <div>
      <h1
        className="
        rounded-full
        border-4
        border-yellow-500
        text-yellow-50
        text-4xl
        font-bold
        text-center
        m-4
        animate-pulse
        animate-gradient-x
        bg-gradient-to-r
        from-yellow-500
        to-yellow-300
        bg-clip-text"
      >
        {state.secondsRemining}
      </h1>
    </div>
  );
};
