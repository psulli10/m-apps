const ResultComponent = ({ score, userName }) => {

  return(
    <>
    <h3>This is a result component</h3>
    <h4>Hey {userName}....</h4>
    <h5>You scored {score} out of 5</h5>
    </>
  )
};

export default ResultComponent;