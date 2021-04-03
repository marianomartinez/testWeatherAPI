import React from 'react';

const WeatherImage = ({weather}) => {
  return (
    <figure className="col-2 m-auto px-0 py-2">
      <img className="w-100" src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`} class="card-img-top" alt="..." />
    </figure>
  )
}

export default WeatherImage;