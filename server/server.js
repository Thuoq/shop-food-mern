require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const shopRouter = require("./routers/shop.router");
const userRouter = require("./routers/user.router");
const User = require("./models/user.model");
const DB = process.env.DATA_BASE;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
mongoose.connect(DB,{
	useNewUrlParser: true,
	useCreateIndex: true, 
	useFindAndModify: false,
	useUnifiedTopology: true
}).then( () => { 
	console.log("DB connections succesfully")
}) 

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/",(req,res) => {
	res.send("<h1>Hello World</h1>")
})
app.use ("/shop",shopRouter);
app.use("/user",userRouter);

const PORT = process.env.PORT  || 2020;

app.listen(PORT, () => {
	console.log("SERVER RUNING PORT", PORT )
})