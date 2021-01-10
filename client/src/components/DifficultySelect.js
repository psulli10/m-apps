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
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </>
  )
}

export default DifficultySelect