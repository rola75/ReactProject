import "./BeerCard.scss";

const BeerCard = (props) => {
  const { name, tagline, image_url } = props;

  // const frontCard = (
  //   <main className="card">
  //     <div className="card__border">
  //       <h2 className="card__heading">{name}</h2>
  //       <img className="card__img" src={image_url} alt="beer" />
  //       <p className="card__tagline">{tagline}</p>
  //     </div>
  //   </main>
  // );

  // const backCard = (
  //   <main className="card_back">
  //     <div className="card__border">
  //       <h2 className="card__heading">{first_brewed}</h2>
  //       <img className="card__img" src={abv} alt="beer" />
  //       <p className="card__tagline">{ph}</p>
  //     </div>
  //   </main>
  // );

  return (
    <main className="card">
      <div className="card__border">
        <h2 className="card__heading">{name}</h2>
        <img className="card__img" src={image_url} alt="beer" />
        <p className="card__tagline">{tagline}</p>
      </div>
    </main>
  )
};

export default BeerCard;
