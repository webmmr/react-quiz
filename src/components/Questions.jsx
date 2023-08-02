import Options from "./Options";

/* eslint-disable react/prop-types */
const Questions = ({ questions, dispatch, answer, points }) => {
  // console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options
        questions={questions}
        dispatch={dispatch}
        answer={answer}
        points={points}
      />
    </div>
  );
};

export default Questions;
