import React from 'react';
import WeatherDetails from './WeatherDetails';
import WeatherImage from './WeatherImage';
import CardHeader from './CardHeader';

const Card = ({props}) => {
  return (
    <div className="card">
      <CardHeader city={props.city} />
      <WeatherImage weather={props.weather} />
      <WeatherDetails weather={props.weather} />
    </div>
  )
}

export default Card;