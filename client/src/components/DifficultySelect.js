const DifficultySelect = ({selectDifficulty}) => {

  const handleChange = (event) => {
    const difficulty = event.target.value
    selectDifficulty(difficulty)
  }

  return(
    <>
      <h3>I am a difficulty selector</h3>
      <select onChange={handleChange}>
        <option hidden>Choose a Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </>
  )
}

export default DifficultySelect