import "./BeerCardContainer.scss";
import BeerCard from "../BeerCard/BeerCard";

const BeerCardContainer = (props) => {
    const {beersArr} = props;

    const beerProfile = beersArr.map((beer) =>{
        return <BeerCard />
    })
   
   

    return(
        <>
        {beerProfile}
        </>
    )

}

export default BeerCardContainer;