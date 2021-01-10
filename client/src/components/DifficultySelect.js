import { Link } from 'react-router-dom';

const DifficultySelect = ({selectDifficulty}) => {

  const handleChange = (event) => {
    const difficulty = event.target.value
    selectDifficulty(difficulty)
  }

  return(
    <>
      <h3>I am a difficulty selector</h3>
      <select onChange={handleChange} defaultValue=""required>
        <option disabled value="">Choose a Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <br></br>
        <Link to="/quiz">Start the quiz!</Link>
    </>
  )
}

export default DifficultySelect