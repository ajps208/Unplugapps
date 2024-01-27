const express = require('express');
const db = require('./Database/dbconfig'); 
const router = require('./Routes/router');
const cors = require('cors');

const app = express();
const port = 5000;

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send(`<h1>SERVER STARTED</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
