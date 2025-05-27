const express = require('express');
const mongodb=require('./db');
mongodb();
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send("hello");
});
app.use(express.json());
app.use("/api",require('./routes/createUser'));
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
