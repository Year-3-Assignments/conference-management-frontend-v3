const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
import https from 'https';

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

setInterval(function() {
  https.get(process.env.REACT_APP_API_STG_URL);
  console.log('Root service called');
}, 3000)

app.listen(port);
console.log('Server started');
