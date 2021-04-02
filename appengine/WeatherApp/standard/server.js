const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/views/home.html'));
});

// Listen to the App Engine-specified port, or 8080 otherwise
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
