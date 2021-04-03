const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get('/api/games', (req, res) => {
  // let gameList = ['game1', 'game2', 'game3'];
  // res.json(gameList);
  fetch('https://www.metaweather.com/api/location/search/?query=amsterdam')
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => res.json(data))
});

const port = 5000;
app.listen(port);
console.log('App listening on port ' + port);
