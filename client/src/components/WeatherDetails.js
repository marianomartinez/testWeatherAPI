import React from 'react';

const WeatherDetails = ({weather}) => {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div className="row d-flex justify-content-between">
          <div className="col-sm-12 col-md-9">
            <p className="my-0">Temperature: min. {Math.round(weather.min_temp)}° | max. {Math.round(weather.max_temp)}° | feels like {(weather.the_temp === null ? "(N/A)" : `${Math.round(weather.the_temp)}°`)}</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <p className="text-right my-0">Humidity: {Math.round(weather.humidity)}%</p>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row d-flex justify-content-between">
          <div className="col-sm-12 col-md-4">
            <p className="my-0">Wind: {(weather.wind_direction_compass === null || (weather.wind_speed === null)) ? "(N/A)" : `${weather.wind_direction_compass} ${Math.round(weather.wind_speed * 1.60934)} km/h`}</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <p className="text-right my-0">Air pressure: {(weather.air_pressure === null) ? "(N/A)" : `${weather.humidity} mbar`}</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <p className="text-right my-0">Visibility: {(weather.visibility === null) ? "(N/A)" : `${Math.round(weather.visibility * 1.60934)} m`}</p>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default WeatherDetails;