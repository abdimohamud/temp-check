import React, {useContext, useState} from 'react'

import WeatherContext from '../context'
import { Container, WeatherSideContainer, TodayInfo, Item, List, BtnContainer } from '../styles'
import moment from 'moment'
import Modal from 'react-modal'

Modal.setAppElement('#root');
const data = [
    {
      name: "Tuesday",
      short: "Tue",
      temp: "29"
    },
    {
      name: "Wednesday",
      short: "Wed",
      temp: "21"
    },
    {
      name: "Thursday",
      short: "Thu",
      temp: "08"
    },
    {
      name: "Friday",
      short: "Fri",
      temp: "19"
    }
  ];

  
  
  const WeekItem =  ({ activeDay, setActiveDay, item }) => {
      let day = moment(new Date(item.dt)).format('dddd').substring(0, 3);
      console.log(item)
      return (
          <Item
          onClick={() => {
          setActiveDay(item);
        }}
        active={activeDay.dt === item.dt}
        >
        <i className="day-icon" data-feather="cloud-rain" />
        <span className="day-name">{day}</span>
        <span className="day-temp">{item.temp.day}°C</span>
      </Item>
    );
  };
  
  const Weather = () => {
    const Button =() => {
      
      return (
        <BtnContainer>
          <button className="location-button" onClick={() => setIsOpen(true)}>
            <span>Get Started!</span>
          </button>
        </BtnContainer>
      );
    };
    
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal(e) {
      e.preventDefault()
      setIsOpen(true);
    }
  
    function afterOpenModal(e) {
      // references are now sync'd and can be accessed.
      console.log(e)
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const [status, setStatus]=useState("")
    const [location, setLocation] = useState(null)
    const {state} = useContext(WeatherContext)

    const [activeDay, setActiveDay] = useState({
        name: "Tuesday",
        short: "Tue",
        temp: "29"
      });
    const findGeo =(e)=>{
        e.preventDefault()
         
    if(!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        setStatus('Locating…');
        navigator.geolocation.getCurrentPosition(success, error);
      }

        
    function success(position) {
        let res = {
            latitude  : position.coords.latitude,
            longitude : position.coords.longitude,
        }
        setLocation(res) 
        setStatus('Success!')
        
        let link = `https://www.openstreetmap.org/#map=18/${res.latitude}/${res.longitude}`;
        let textContent = `Latitude: ${res.latitude} °, Longitude: ${res.longitude} °`;
        setLocation({...location, link, textContent})
      }
    
      function error() {
        setStatus('Unable to retrieve your location');
      }
    

    }
  
  
    console.log(status)
    console.log(location)
    return (
        <>
        <div className="App">
             <Button />
             <br/>
            <div className="container">
                <Container>
                <WeatherSideContainer>
        <div className="weather-gradient" />
        <div className="date-container">
          <h2 className="date-dayname">{'Tuesday'}</h2>
          <span className="date-day">{'Jun 29 21'}</span>
          <i className="location-icon" data-feather="map-pin" />
          <span className="location">{'Paris, FR'}</span>
        </div>
        <div className="weather-container">
          <i className="fas fa-sun" />
          <h1 className="weather-temp">{'69'}°C</h1>
          <h3 className="weather-desc">{'Sunny'}</h3>
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
        <span className="value">{'0'} km/h</span>
        <div className="clear" />
      </div>
    </TodayInfo>   
    <List>
      {data.map((item, idx) => (
        <WeekItem
          key={idx}
          item={item}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
        />
      ))}
      <div className="clear" />
    </List>  
      </div>
                      {/* {status}
            
            <button onClick={openModal}>CLick me</button>    */}
                </Container>
           
            </div>
            
        </div>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
  
        <button onClick={closeModal}>x</button>
        <div>I am a modal</div>
        <div>
            <button>Click here to fetch your location</button>
        </div>
        <div>
            
            </div>
            <div>
            
            </div>
       
      </Modal>
        </>
    )
}

export default Weather

  