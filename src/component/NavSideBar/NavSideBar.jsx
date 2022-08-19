import { useEffect, useRef } from "react";

const NavSideBar = (props) => {
  const { beersArr, setBeers } = props;

  const unfilterBeersArr = useRef([]);

  useEffect(() => {
    unfilterBeersArr.current = beersArr;
  }, []);

  const allBeers = unfilterBeersArr.current.map((beer) => {
    return beer;
  });

  const filterArr = unfilterBeersArr.current.filter((beer) => {
    return beer.abv > 6;
  });

  const filterClassic = unfilterBeersArr.current.filter((beer) => {
    return beer.first_brewed.slice(3) < 2010;
  });

  const filterAcidityArr = unfilterBeersArr.current.filter((beer) => {
    return beer.ph < 4;
  });

  const handleSearchInputs = (event) => {
    const searchText = event.target.value.toLowerCase();

    const searchFilterBeersArr = unfilterBeersArr.current.filter((beer) => {
      return beer.name.toLowerCase().includes(searchText);
    });
    setBeers(searchFilterBeersArr);
  };

  return (
    <nav className="nav_container">
        <div>
            <input onInput={handleSearchInputs} placeholder="Search" type="text" />
            <p onClick={() => setBeers(allBeers)}>All Beers</p>
            <p onClick={() => setBeers(filterArr)}>High Alcohol</p>
            <p onClick={() => setBeers(filterClassic)}>Classic Range</p>
            <p onClick={() => setBeers(filterAcidityArr)}>High Acidity</p>
        </div>
    </nav>
  );
};

export default NavSideBar;
