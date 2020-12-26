import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [answer, setAnswer] = useState(false);

  const checkState = () => setAnswer(!answer);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>

        <button className="btn" onClick={checkState}>
          {answer ? <AiOutlineMinus /> : "+"}
        </button>
      </header>
      <p>{answer && info}</p>
    </article>
  );
};

export default Question;
