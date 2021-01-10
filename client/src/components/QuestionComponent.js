import QuizContainer from "../containers/QuizContainer";

const QuestionComponent = ({ quizQuestions, currentQuestion }) => {

const getAnswerNodes = (questionIndex) => {
    const answers = quizQuestions[questionIndex].answers.map((answer) => {
      console.log(answer)
    return <button>{answer}</button>
  })
  return answers
}

console.log("answerNodes", getAnswerNodes(currentQuestion))

  return(
    <>
      <h3>This is a question component</h3>
      <p>{quizQuestions[currentQuestion].question}</p>
      {getAnswerNodes(currentQuestion)}
    </>
  )

};

export default QuestionComponent;