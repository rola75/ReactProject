import { Beer } from "../beersModel/beersModel.js"

export const addBeers = (req, res) => {
    Beer.create({ name: req.body.name, image_url: req.body.image_url, tagline: req.body.tagline })
      .then(() => {
        res.status(201).send({ message: "Created" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const getBeers = (req, res) => {
    Beer.findAll()
    .then(beers => {
      res.status(200).send(beers)
    })
    .catch(err => {
      console.log(err)
    })
  };

