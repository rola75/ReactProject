import "./BeerCardContainer.scss";
import BeerCard from "../BeerCard/BeerCard";

const BeerCardContainer = (props) => {
    const {beersArr} = props;

    const beerProfile = beersArr.map((beer) =>{
        const{ name, tagline, image_url } = beer;
        
        return <BeerCard key={beer.id} name={name} image_url={image_url} tagline={tagline} />
    })
   
   

    return(
        <>
            <div className="container">
                <div className="container__card">
                    {beerProfile}
                </div>
         </div>
        </>
    )

}

export default BeerCardContainer;