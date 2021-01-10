import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <>
      <h3>Welcome to M-apps</h3>
      <Link to="/country-select">Get started...</Link>
    </>
  )
}

export default Home;