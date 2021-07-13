import axios from "axios";

let apiKey = process.env.REACT_APP_WEATHER_API_KEY;

let baseURL = "https://posts-jest-app.herokuapp.com/https:/api.openweathermap.org/data/2.5";

export const KelvintoFahrenheit = (k) => {
  return (k * 1.8 - 459.67).toFixed(1);
};
export const fetchWeatherByLocation = (lat, lon) => {
  return axios.get(`${baseURL}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
};

export const fetchWeatherByZip =(zip) => {
    return axios.get(`${baseURL}/weather?zip=${zip},US&appid=${apiKey}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });
    
}

export const timeConverter =(UNIX_timestamp) =>{
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  
export const fetchForecastByZip = (zip) => {
    return axios.get(`api.openweathermap.org/data/2.5/forecast/daily?zip=${zip},US&cnt=5&appid=${apiKey}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });
}
export const fetchForecastByLocation= (lat, lon) => {
  return axios.get(`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
};
