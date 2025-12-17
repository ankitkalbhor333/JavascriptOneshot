import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import data from './data.json' with { type: "json" };
const instadata = data;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

//serving static file 
app.use(express.static("public"))

// Tell Express where views are and set EJS as engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.send("root path");
});

app.get('/home', (req, res) => {
  res.render("home", { title: "Home Page", message: "Welcome to EJS Home!" });
});

app.get('/root/:random', (req, res) => {
  let arra=["apple","banana","grape","mango"];
let randomNum = req.params.random;
  res.render("randomnumber.ejs", { number: randomNum ,arr:arra});
})

app.get("/root1/:username",(req,res)=>{
  let {username} = req.params;

  // const instadat=require("./data.json");
  const userData=instadata[username];

  if(userData){
    res.render("profile.ejs",{user:userData});
  }else{
    res.status(404).send("User not found");
  }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
