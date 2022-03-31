import {useState} from 'react'

function Car(){
  return (
    <div>
      <h1>Car!</h1>
    </div>
  );
}

function Garage(){
  const [garage, setGarage] = useState({
    brand: 5,
    model: 4,
    yoman: 6
  })
  return(
    <>
      <h2> 한글 글씨체는?! </h2>
      <Car />
    </>
  );
}

export default Garage;
