import express from "express";
import ExpressError from "./expreeserror.js"; // keep consistent naming

const app = express();
app.use(express.json());

// Root GET route
app.get("/", (req, res) => {
  res.send("root path");
});

// Dynamic GET route with params
app.get("/:users/:id", (req, res) => {
  let { users, id } = req.params;
  res.send(`<h1>User: ${users}, ID: ${id}</h1>`);
});

// POST route
app.post("/data", (req, res) => {
  const data = req.body;
  res.send(`Received data: ${JSON.stringify(data)}`);
});

// Search route with proper error handling
app.get("/search", (req, res, next) => {
  const { q } = req.query;
  if (!q) {
    return next(new ExpressError(400, "Query not found"));
  }
  res.send(`Search Query: ${q}`);
});

// Route that triggers an error
app.get("/error", (req, res, next) => {
  try {
    abcd = abcd; // ReferenceError
  } catch (err) {
    next(err);
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  console.error("Error caught:", err);
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
