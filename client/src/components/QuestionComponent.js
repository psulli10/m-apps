const QuestionComponent = ({ quizQuestions, currentQuestion, increaseQuestionCount, checkAnswerCorrect }) => {

const handleClick =(event) => {
  // console.log(event.target.value)
  const answer = event.target.value;
  checkAnswerCorrect(answer)
  increaseQuestionCount()
}

const getAnswerNodes = (questionIndex) => {
    const answers = quizQuestions[questionIndex].answers.map((answer, index) => {
      // console.log(answer)
    return <button onClick={handleClick} value={answer} key={index}>{answer}</button>
  })
  return answers
}

  return(
    <>
      <h3>This is a question component</h3>
      <p>{quizQuestions[currentQuestion].question}</p>
      {getAnswerNodes(currentQuestion)}
    </>
  )

};

export default QuestionComponent;