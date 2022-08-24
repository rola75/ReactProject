import express from 'express';
import router from './routes/beers.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3007;


app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use("/beers", router);


app.listen(port, (req, res)=>{
    console.log(`server is working ${port}`)
})