const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./API/routes/routes");
const app = express();
app.use(express.json());
// app.use(cors());

const mongooseURL =
  "mongodb+srv://adelaltory197:deal44445@cluster0.7mexg.mongodb.net/";

mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});



app.get("/app", (req, res) => {
  res.status(200).json({
    name: 'adel',
    lastname: 'adelaltory',
    age: 13
  })

});

app.post("/whatmyname", (req, res) => {
  const { name, age } = req.body
  if (age >= 18) {
    res.status(200).json({
      massage: "too young",
      user: name
    })
  }


});
app.post("/name", (req, res) => {
  const { name, password } = req.body
  if (name == "adel" && password == "123") {
    res.status(200).json({
      massage: "success",
    })
  }
  else {
    res.status(400).json({
      massage: "notcorrect"
    })
  }
});
app.post("/sum",(req,res)=>{
const {number1 , number2 } = req.body

  res.status(200).json({
  result:  number1 +  number2
    
  })

})

app.post("/name",(req,res)=>{


})

app.use("/", Routes);

module.exports = app;