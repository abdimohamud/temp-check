import axios from "axios";

let apiKey = "53762837fe835166ae7879d926dd8814";

let baseURL = "http://localhost:8080/api.openweathermap.org/data/2.5";

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
  

export const fetchForecastByLocation= (lat, lon) => {
  return axios.get(`http://localhost:8080/api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
};

export const getLocation=()=> {
    
    function onSuccess(position) {
        const {
            latitude,
            longitude
        } = position.coords;

        console.log({lat:latitude, lon:longitude})
    }

    // handle error case
    function onError(err) {
       console.log(err)
    }
   navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
