import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from 'dotenv';
import MongooDB from './db.js';
import Loigin_Route from './Components/Login.js' //Loigin_Route
import Signup from "./Components/signup.js";
import Google from "./Components/Google.js";
const app = express();
env.config();
MongooDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200, 
}));

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(Loigin_Route);
app.use(Signup);
app.use(Google);
app.listen(process.env.port || 4000, () => {
    console.log(`Listening on port ${process.env.port}`);
});
