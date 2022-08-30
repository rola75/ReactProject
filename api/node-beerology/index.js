import express from 'express';
import router from './routes/beers.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from "./db/index.js";

const app = express();
const port = process.env.PORT || 3007;

sequelize.sync()
.then((result => {
  console.log(result)
}))
.catch((err => {
  console.log(err);
}));


app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use("/beers", router);


app.listen(port, (req, res)=>{
    console.log(`server is working ${port}`)
})

app.post('/beers', (req, res)=>{
    console.log(req)
})