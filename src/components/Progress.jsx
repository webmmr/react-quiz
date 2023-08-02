/* eslint-disable react/prop-types */
const Progress = ({ index, numQuestions, points, totalPoints, answer }) => {
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question {index + 1} / {numQuestions}
      </p>
      <p>
        {points} / {totalPoints}
      </p>
    </div>
  );
};

export default Progress;
