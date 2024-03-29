const express = require("express");
const app = express();
const fs = express("fs");
const env = require("dotenv");
const event = require("http");
const path = express("path");

const port = 3000;
app.set("view engine", "pug"); // testing view engine
app.use(express.static("public"));

env.config

console.log(process.env.URL);


app.use((req, res, next) => {
  next();
});
//tesing views close route
//few user views
//app.get("/profile", (req, res) => {
// res.render("profile", { title: "hey", message: "Hello there" });
//});
//app.get("/avatar", (req, res) => {
// res.sendFile(`${__dirname}/photo.png`);
//});
const aRoute = require("./routes/a");
const userRouter = require(`./routes/user`);

app.use("/a", aRoute);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Listening  ${port}`);
});
