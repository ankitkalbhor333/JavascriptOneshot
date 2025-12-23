const express = require('express');
import Expresserror from './expreeserror';
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// Root GET route
app.get('/', (req, res) => {
  res.send("root path");
});

// Dynamic GET route with params
app.get('/:users/:id', (req, res) => {
  let { users, id } = req.params;
  res.send(`<h1>User: ${users}, ID: ${id}</h1>`);
});

// POST route
app.post('/data', (req, res) => {
  const data = req.body; // Access JSON body
  res.send(`Received data: ${JSON.stringify(data)}`);

  throw new Expresserror(404,"data not recieved")
});


app.get('/search', (req, res) => {
const { q } = req.query;
res.send(`Search Query: ${q}`);
})
app.get("/error",(req,res)=>{
  abcd=abcd;
})

app.use((err,req,res,next)=>{
  console.log("eroro====")
  next(err)
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
