import HighAcidityFilter from "../HighAcidityFilter/HighAcidityFilter";

const Nav = (props) => {
    const {beersArr} = props;

    const filterABV = beersArr.filter((beer) => {
        return beer.abv > 6;
    })
    console.log(filterABV)

    return (
        <div>
            <p>search</p>
            <p>High Alcohol</p>
            <p>Classic Range</p>
            <HighAcidityFilter />
        </div>
    )
}

export default Nav;