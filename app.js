import dotenv from "dotenv";
import express from "express";
import Users from "./Api/V1/Routes/Users.routes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/usuarios", Users)


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});