import "./BeerCardContainer.scss";
import BeerCard from "../BeerCard/BeerCard";

const BeerCardContainer = (props) => {
    const {beersArr} = props;

    const beerProfile = beersArr.map((beer) =>{
        const{ name, tagline, image_url } = beer;
        // let hover = true;
        return (
            <>
            <BeerCard key={beer.id} name={name} image_url={image_url} tagline={tagline}/>
            </>
        )
    })
   
   

    return(
        <>
            <div className="container__card">
                {beerProfile}
            </div>
        </>
    )

}

export default BeerCardContainer;