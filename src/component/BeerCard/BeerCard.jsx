import "./BeerCard.scss";

const BeerCard = (props) => {
    const{ name, tagline, image_url } = props;

    return (
        <main className="card">
            <div className="card__border">
                <h2 className="card__heading">{name}</h2>
                <img className="card__img" src={image_url} alt="beer"/>
                <p className="card__tagline">{tagline}</p>
            </div>
        </main>
    )
}

export default BeerCard;