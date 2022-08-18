
import './App.css';
import BeerCardContainer from './component/BeerCardContainer/BeerCardContainer';
import { useState, useEffect } from "react";
import Heading from './component/Heading/Heading';

const App = () => {

  const [ beers, setBeers ] = useState();

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((res) =>{
      return res.json()
    })
    .then((data) =>{
      setBeers(data)
      console.log(data)
    })
  }

  useEffect(getBeers, [])

  return (
    <div className="App">
      <header className='header'>
        <Heading />
      </header>

    <nav>

    </nav>

    <main>
      {beers && <BeerCardContainer  beersArr={beers}/>}
    </main>

    </div>
  );
}

export default App;
