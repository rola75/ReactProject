import "./BeerCard.scss";

const BeerCard = (props) => {
    const{ name, tagline, image_url } = props;

    return (
        <main className="card">
            <h2 className="card__heading">{name}</h2>
            <img className="card__img" src={image_url} alt="beer"/>
            <p className="card__tagline">{tagline}</p>
        </main>
    )
}

export default BeerCard;