import React, {useContext, useEffect, useState} from 'react'
import Map from './map'
import { Link } from 'react-router-dom'
import { Container, WeatherSideContainer, TodayInfo } from '../styles'
import { fetchForecastByLocation, fetchWeatherByLocation, fetchWeatherByZip, KelvintoFahrenheit, timeConverter } from '../hooks'
import moment from 'moment'
import WeatherContext from '../context'

import { SpinnerCircular } from 'spinners-react';
const CurrentWeather = () => {
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState(null)
    const {state} = useContext(WeatherContext)
  useEffect(() => {
     if(state.lat && state.lon ){
        fetchWeatherByLocation(state.lat, state.lon).then(res=>{setWeather(res.data) ;setLoading(false)}).catch(err=>console.log(err))
     } 
     else if (state.zip.length>0) {
         fetchWeatherByZip(state.zip).then(res=>{setWeather(res.data) ;setLoading(false)}).catch(err=>console.log(err))
     }
  }, [state.zip.length, state.lon, state.lat])
 
    return (
        <div>
            {loading? <SpinnerCircular loading={loading.toString()} />:
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Here's your current weather report</h1>
        <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>

   
      <div className="container">
                <Container>
                <WeatherSideContainer>
        <div className="weather-gradient" />
        <div className="date-container">
          <h2 className="date-dayname">{moment(timeConverter(weather.dt)).format('dddd') }</h2>
          <span className="date-day">{moment(timeConverter(weather.dt)).format("MMM Do YY")}</span>
          <i className="location-icon" data-feather="map-pin" />
          <span className="location">{`${weather.name}, ${weather.sys.country}`}</span>
        </div>
        <div className="weather-container">
          <i className="fas fa-sun" />
          <h1 className="weather-temp">{KelvintoFahrenheit(weather.main.temp)}°C</h1>
          <h3 className="weather-desc">{weather.weather[0].main}</h3>
        </div>
      </WeatherSideContainer>
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
        <span className="value">{weather.wind.speed*3.6} km/h</span>
        <div className="clear" />
      </div>
    </TodayInfo>   
    </div>
                  </Container>
                  </div>
               
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        <Map/> 
    </div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">

    <Link to ="/forecast"  ><a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">View Forecast
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>
      </a></Link>

     
    </div>
  </div>
</section> }
              
        </div>
    )
}

export default CurrentWeather
