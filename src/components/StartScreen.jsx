/* eslint-disable react/prop-types */
const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQuestions} questions to test your React knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start QUIZ
      </button>
    </div>
  );
};

export default StartScreen;
