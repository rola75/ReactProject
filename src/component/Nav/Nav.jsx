import { useEffect, useRef } from "react";

const Nav = (props) => {
    const {beersArr, setBeers} = props;

    const unfilterBeersArr = useRef([])
    useEffect(() =>{
        unfilterBeersArr.current = beersArr;
    },)
    

    // const handleOnClick = () =>{
        
    // }
    
    const filterArr = unfilterBeersArr.current.filter((beer) => {
        return beer.abv > 6;
    })

    const filterAcidityArr = unfilterBeersArr.current.filter((beer) => {
        return beer.ph < 4;
    })

    

   
    return (
        <div>
            <p>search</p>
            <p onClick={() => setBeers(filterArr)}>High Alcohol</p>
            <p>Classic Range</p>
            <p onClick={() => setBeers(filterAcidityArr)}>High Acidity</p>
        </div>
    )
}

export default Nav;