import React, { useState, useContext, useEffect } from 'react'
import {Container,WeatherSideContainer} from '../styles'
import moment from 'moment'
import { useHistory } from 'react-router-dom';
import { KelvintoFahrenheit, timeConverter, fetchForecastByLocation, fetchForecastByZip} from '../hooks';
import Modal from "react-modal";
import WeatherDay from './WeatherDay';
import WeatherContext from '../context';
import { SpinnerCircular } from 'spinners-react';

Modal.setAppElement("#root");

 
const Forecast = () => {
    const [loading, setLoading] = useState(true)
    const {state, forecast}=useContext(WeatherContext)
  
    const [isOpen, setIsOpen] = useState(false);
    const [activeDay, setActiveDay] = useState(null)
    let history = useHistory();
   
    useEffect(() => {
      if (forecast){
        setLoading(false)
      }
     }, [forecast])
    
   function toggleModal() {
    setIsOpen(!isOpen);
  }
   
    return (
        <div>
            {loading? <SpinnerCircular loading={loading.toString()}/>: 
            <>
               <div style={{display:'flex'}}> <span style={{flex:'1'}}> <button style={{textAlign:'right'}} onClick={(e)=>{e.preventDefault(); history.push('/weather')}} className="flex order-1  mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{'< Back to Day View'}</button>
</span></div> 
              <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Here's the Forecast in {forecast.city.name} for the week of {moment(timeConverter(forecast.list[0].dt)).format('l')} to {moment(timeConverter(forecast.list[4].dt)).format('l')}</h1>
     

    </div>
    <div className="flex  -m-4" style={{display:'flex', justifyContent:'space-between'}}>
        {forecast.list.map((item, idx) => {
            return (
               <div className="container" key={idx} onClick={(e)=>{e.preventDefault(); setActiveDay(item); toggleModal()}}>
                <Container>
                <WeatherSideContainer>
        <div className="weather-gradient" />
        <div className="date-container">
        <h2 className="date-dayname">{moment(timeConverter(item.dt)).format('dddd') }</h2>
          <span className="date-day">{moment(timeConverter(item.dt)).format("MMM Do YY")}</span>
          <i className="location-icon" data-feather="map-pin" />
          <span className="location">{`${forecast.city.name}, ${forecast.city.country}`}</span>
        </div>
        <div className="weather-container">
          <i className="fas fa-sun" />
          <h1 className="weather-temp">{KelvintoFahrenheit(item.temp.day)}°C</h1>
          <h3 className="weather-desc">{item.weather[0].main}</h3>
        </div>
      </WeatherSideContainer>
      
                  </Container>
                  </div>
            )
        })}
      
      
      
    </div>
  </div>
</section>

         
<Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
          <WeatherDay activeDay={activeDay} isOpen={isOpen} setIsOpen={setIsOpen} toggleModal={toggleModal} forecast={forecast} KelvintoFahrenheit={KelvintoFahrenheit}/>
      </Modal>
      </>
}
          
        </div>
    )
}

export default Forecast
