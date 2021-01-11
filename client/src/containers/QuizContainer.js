import { useState } from "react";
import QuestionComponent from '../components/QuestionComponent';
import ResultComponent from '../components/ResultComponent';
import MapComponent from '../components/MapComponent';

const QuizContainer = ({ selectedQuestions, selectedCountry }) => {

  const [questionCount, setQuestionCount] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  if (!selectedQuestions) {
    return (
      <>
        <h3>Not enough information to start quiz</h3>
      </>
    )
  };

  const increaseQuestionCount = () => {
    setQuestionCount(questionCount => questionCount + 1)
  };

  const checkAnswerCorrect = (answer) => {
    if (answer === selectedQuestions[questionCount].correct_answer) {
      setCorrectAnswerCount(correctAnswerCount => correctAnswerCount + 1)
      console.log('Answer correct')
    } else {
      console.log('Incorrect answer')
    }
  };

  if (questionCount !== 4) {
    return (
      <>
        <MapComponent country={selectedCountry} currentZoomLevel={questionCount}/>
        <QuestionComponent quizQuestions={selectedQuestions} currentQuestion={questionCount} increaseQuestionCount={increaseQuestionCount} checkAnswerCorrect={checkAnswerCorrect} />
      </>
    )
  } else {
    return (
      <>
        <MapComponent country={selectedCountry} currentZoomLevel={questionCount}/>
        <ResultComponent score={correctAnswerCount}/>
      </>
    )
  }

};

export default QuizContainer;