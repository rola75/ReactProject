
const myBeerArr =[
    {
        id: 26,
        name: "Beer A",
        tagline: "Beer A tagline",
        first_brewed: "09/2006",
        description: "Beer A description.",
        image_url: "https://images.punkapi.com/v2/keg.png",
        abv: 4.6,
        ph: 4.6,
        food_pairing: [
            "Pizza",
            "Chips",
            "Hamburgers"
        ]
    },
    {
        id: 27,
        name: "Beer B",
        tagline: "Beer A tagline",
        first_brewed: "09/2006",
        description: "Beer A description.",
        image_url: "https://images.punkapi.com/v2/keg.png",
        abv: 4.6,
        ph: 4.6,
        food_pairing: [
            "Pizza",
            "Chips",
            "Hamburgers"
        ]
    },
    {
        id: 28,
        name: "Beer C",
        tagline: "Beer A tagline",
        first_brewed: "09/2006",
        description: "Beer A description.",
        image_url: "https://images.punkapi.com/v2/keg.png",
        abv: 4.6,
        ph: 4.6,
        food_pairing: [
            "Pizza",
            "Chips",
            "Hamburgers"
        ]
    },
    {
        id: 29,
        name: "Beer D",
        tagline: "Beer A tagline",
        first_brewed: "09/2006",
        description: "Beer A description.",
        image_url: "https://images.punkapi.com/v2/keg.png",
        abv: 4.6,
        ph: 4.6,
        food_pairing: [
            "Pizza",
            "Chips",
            "Hamburgers"
        ]
    },
    {
        id: 30,
        name: "Beer E",
        tagline: "Beer A tagline",
        first_brewed: "09/2006",
        description: "Beer A description.",
        image_url: "https://images.punkapi.com/v2/keg.png",
        abv: 4.6,
        ph: 4.6,
        food_pairing: [
            "Pizza",
            "Chips",
            "Hamburgers"
        ]
    },
    {
        id: 31,
        name: "Beer F",
        tagline: "Beer A tagline",
        first_brewed: "09/2006",
        description: "Beer A description.",
        image_url: "https://images.punkapi.com/v2/keg.png",
        abv: 4.6,
        ph: 4.6,
        food_pairing: [
            "Pizza",
            "Chips",
            "Hamburgers"
        ]
    },
];

export const getBeersArr = (req, res) => {
    res.status(200).send({
        beers: myBeerArr
    });
}