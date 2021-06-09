import React from 'react';
import {Card} from 'react-bootstrap';
import './weather.css';
import './DisplayWeather.css';
const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
<div className="displayweather">
   <div className="maincard1">
    <Card>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <h5>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
       </h5>
        {/* minimum temperature */}
        <h5>Min: {temp_min}</h5>
        {/* maximum temperature */}
        <h5>Max: {temp_max}</h5>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
};
export default WeatherCard;