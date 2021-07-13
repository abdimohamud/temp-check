import React from 'react'
import { timeConverter } from '../hooks'
import { Container, WeatherSideContainer2, TodayInfo } from '../styles'
import moment from 'moment'
const WeatherDay = ({activeDay ,forecast, toggleModal, KelvintoFahrenheit}) => {
    return (
        <div>
            <div>
             <div onClick={toggleModal}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
<div className="container">
                <Container>
                <WeatherSideContainer2>
        <div className="weather-gradient" />
        <div className="date-container">
        <h2 className="date-dayname">{moment(timeConverter(activeDay.dt)).format('dddd') }</h2>
          <span className="date-day">{moment(timeConverter(activeDay.dt)).format("MMM Do YY")}</span>
          <i className="location-icon" data-feather="map-pin" />
          <span className="location">{`${forecast.city.name}, ${forecast.city.country}`}</span>
        </div>
        <div className="weather-container">
          <i className="fas fa-sun" />
          <h1 className="weather-temp">{KelvintoFahrenheit(activeDay.temp.day)}°C</h1>
          <h3 className="weather-desc">{activeDay.weather[0].main}</h3>
        </div>
      </WeatherSideContainer2>
      <div className="info-side">
      <TodayInfo className="today-info">
      <div className="precipitation">
        {" "}
        <span className="title">PRECIPITATION</span>
        <span className="value">0 %</span>
        <div className="clear" />
      </div>
      <div className="humidity">
        {" "}
        <span className="title">HUMIDITY</span>
        <span className="value">{'34'}  %</span>
        <div className="clear" />
      </div>
      <div className="wind">
        {" "}
        <span className="title">WIND</span>
        <span className="value">{activeDay.speed*3.6} km/h</span>
        <div className="clear" />
      </div>
    </TodayInfo>
    </div>
                  </Container>
                  </div>
        </div>
        </div>
    )
}

export default WeatherDay
