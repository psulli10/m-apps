import {Link} from 'react-router-dom';

const UserName = ( {setName} ) => {

  const handleNameChange = (event) => { 
    const name = event.target.value
    console.log(name)
    setName(name);
  }

  return (
    <>
    <p>Username component</p>
    <input type="text" onChange={handleNameChange}/>
    <Link to="/country-select">Next</Link>
    </>
  )
};

export default UserName;