const express = require('express')
const app = express()

const mongoDB=require('./db');
mongoDB();
require('dotenv').config()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://food-delivary-foodify.onrender.com/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.use('/api',require("./Routes/createUser2"))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const port=process.env.port || 5001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
