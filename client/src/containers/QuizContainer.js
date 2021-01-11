import { useState } from "react";
import QuestionComponent from '../components/QuestionComponent';
import ResultComponent from '../components/ResultComponent';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

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

  const markerIcon = L.icon({
    // some generic icon from google
    iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [35, 35]
  });


  const resultToggle = () => {
    if (questionCount !== 4) {
      return <QuestionComponent quizQuestions={selectedQuestions} currentQuestion={questionCount} increaseQuestionCount={increaseQuestionCount} checkAnswerCorrect={checkAnswerCorrect} />
    } else {
      return <ResultComponent score={correctAnswerCount} />
    }
  }

  const SetZoomOnClick = ({zoom}) => {
    const map = useMap();
    console.log("set zoom")
    map.setZoom(zoom);

    return null;
  }

  return (
    <>
      <MapContainer center={selectedCountry.lat_long} zoom={selectedCountry.zooms[questionCount]} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={selectedCountry.lat_long} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
        <SetZoomOnClick zoom={selectedCountry.zooms[questionCount]} />
      </MapContainer>
      {resultToggle()}

    </>
  )

};

export default QuizContainer;