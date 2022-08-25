
import './App.css';
import BeerCardContainer from './component/BeerCardContainer/BeerCardContainer';
import NavSideBar from './component/NavSideBar/NavSideBar';
import Heading from './component/Heading/Heading';
import { useState, useEffect } from "react";


const App = () => {
  
  const [ newBeers, setNewBeers ] = useState();
  const [ beers, setBeers ] = useState();

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((res) =>{
      return res.json()
    })
    .then((data) =>{
      getNewBeers()
      setBeers(data)
    })
  }
  useEffect(getBeers, []);

  const getNewBeers = () => {
    fetch('http://localhost:3007/beers')
    .then((res) =>{
      return res.json()
    })
    .then((data) => {
       setNewBeers(data);
    })
  }

useEffect(getNewBeers, []);

 

  return (
    <div className="App">
      <header className='header'>
        <Heading />
      </header>

      
      <section className='main__section'>
        
        <div className='sidebar'>
          <nav className='nav_filter'>
            {beers && <NavSideBar customBeer={newBeers} setBeers={setBeers} beersArr={beers}/>}
          </nav>
        </div>

        <main className='main__card-render'>
          {beers && <BeerCardContainer  beersArr={beers}/>}
        </main>
      </section>
    </div>
  );
}

export default App;
