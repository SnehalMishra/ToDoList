// jshint version6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
// const path = require('path');

const items = ["Brush" , "Bath", "Breakfast"];                     // "let" can be used at the place of "var"
const workItems = [];
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", function(req, res){
   
    let day = date.getDate();    //  let day = date.getDay();    --> To get weekday only

   res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
  let item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/Work");
  } else {
  items.push(item);
  res.redirect("/");
}
});

app.get("/Work", function(req, res){
   res.render("list", {listTitle: "Work List", newListItems: workItems});
});  

app.get("/about", function(req, res){
   res.render("about"); 
});

app.listen(3000, function(){
    console.log("Server running on the port 3000.");
});