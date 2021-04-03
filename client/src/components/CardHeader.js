import React from 'react';

const CardHeader = ({city}) => {
  return (
    <div className="card-header">
      <h5 className="card-title">{city.title} {city.location_type}</h5>
    </div>
  )
}

export default CardHeader;