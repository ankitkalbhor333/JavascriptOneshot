import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Tell Express where views are and set EJS as engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.send("root path");
});

app.get('/home', (req, res) => {
  res.render("home", { title: "Home Page", message: "Welcome to EJS Home!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
