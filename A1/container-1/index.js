import express from "express";
import routes from "./routes/calculate.js";

const app = express();
const port = 6000;

app.use(express.json());

app.use('/calculate', routes);

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
})