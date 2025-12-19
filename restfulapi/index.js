import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
// const {v4:uuidv4}=require('uuid')
import { v4 as uuidv4 } from 'uuid';
const methodOverride =require('method-override')
uuidv4();



// Middleware to read form data
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // ✅ fixed

let posts = [
  { id: uuidv4(), username: "ankit", age: 122 },
  { id: uuidv4(), username: "kalbhor", age: 1 },
  { id: uuidv4(), username: "manish", age: 100 }
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs", { posts });
});

app.post("/posts", (req, res) => {
  let {  username, age } = req.body;
  let id=uuidv4()
  posts.push({ id, username, age });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => { // ✅ fixed route
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.listen(3000, () => {
  console.log("listing port 3000");
});
