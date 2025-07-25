import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";


const app = express();
const port = 3000;
env.config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
db.connect();


app.get("/", (req,res) => {
    res.render("index.ejs");
});


app.get("/home", (req,res) => {

});


app.get("/login", (req,res) => {
    res.render("login.ejs");
});


app.get("/register", (req,res) => {
    res.render("register.ejs");
});


app.get("/logout", (req,res) => {

});


app.get("/workouts", (req,res) => {

});
























app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});