import { useState } from "react";
import QuestionComponent from '../components/QuestionComponent'

const QuizContainer = ({selectedQuestions}) => {

  const [questionCount, setQuestionCount] = useState(1);

  if(!selectedQuestions){
    return(
      <>
        <h3>Not enough information to start quiz</h3>
      </>
    )
  }



  return(
    <>
    <QuestionComponent quizQuestions = {selectedQuestions} currentQuestion={questionCount}/>
    </>
  )
}

export default QuizContainer