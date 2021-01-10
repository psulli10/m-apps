import { useState } from "react";
import QuestionComponent from '../components/QuestionComponent'

const QuizContainer = ({selectedQuestions}) => {

  const [questionCount, setQuestionCount] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  if(!selectedQuestions){
    return(
      <>
        <h3>Not enough information to start quiz</h3>
      </>
    )
  }

  const increaseQuestionCount = () => {
    setQuestionCount(questionCount => questionCount + 1)
  }

  const checkAnswerCorrect = (answer) => {
    if(answer === selectedQuestions[questionCount].correct_answer){
      setCorrectAnswerCount(correctAnswerCount => correctAnswerCount + 1)
      console.log('Answer correct')
    } else {
      console.log('Incorrect answer')
    }
  }

  return(
    <>
    <QuestionComponent quizQuestions = {selectedQuestions} currentQuestion={questionCount} increaseQuestionCount={increaseQuestionCount} checkAnswerCorrect={checkAnswerCorrect}/>
    </>
  )
}

export default QuizContainer