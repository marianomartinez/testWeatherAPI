const express = require('express');
const app = express();
const fetch = require('node-fetch');

/* API calls run through proxy (check package.json) */

/* GET method to fetch lattlong by city name from API */
app.get('/api/city/:city', (req, res) => {
  let city = req.params.city;
  
  fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
  .then(res => res.json())
  .then(data => res.json(data[0].latt_long))
  .catch(err => console.log(err))
});

/* GET method to fetch current weather data from API, at closest city to provided location, by lattitude/longitude location */
app.get('/api/lattlong/:latt_long', (req, res) => {
  let latt_long = req.params.latt_long;
  let dataset = {city: "", weather: ""};

  fetch(`https://www.metaweather.com/api/location/search/?lattlong=${latt_long}`)
  .then(res => res.json())
  .then(data => dataset.city = data[0])
  .then(() => fetch(`https://www.metaweather.com/api/location/${dataset.city.woeid}`)
  .then(res2 => res2.json())
  .then(data2 => dataset.weather = data2.consolidated_weather[0])
  .then(() => res.json(dataset)))
  .catch(err => console.log(err))
});

/* Simple server setup */
const port = 5000;
app.listen(port);
console.log('App listening on port ' + port);
