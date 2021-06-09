import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './weather2'
import './weather.css';
const WeatherList = ({weathers}) => {
    return (
      <div className="f">
        <Row>
           {weathers.map(({dt,main, weather}) => (
                <Col key={dt}>
                    <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon}/>
                </Col>
            ))} 
        </Row>
        </div>
    )
}

export default WeatherList;