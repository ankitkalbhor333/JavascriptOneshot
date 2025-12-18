import express from "express"
const app = express();
import path from "path";
import { fileURLToPath } from "url";

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Set EJS as template engine

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Route to show form
app.get("/", (req, res) => {
  res.render("form");
});

// Route to handle form submit
app.post("/submit", (req, res) => {
  const { name, email, password } = req.body;
  res.send(`Name: ${name}, Email: ${email}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
