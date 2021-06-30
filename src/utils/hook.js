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



export const fetchForecastByLocation= (lat, lon) => {
  return axios.get(`http://localhost:8080/api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
};

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



export const fetchForecastByLocation= (lat, lon) => {
  return axios.get(`http://localhost:8080/api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
};

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



export const fetchForecastByLocation= (lat, lon) => {
  return axios.get(`http://localhost:8080/api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
};

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



export const fetchForecastByLocation= (lat, lon) => {
  return axios.get(`http://localhost:8080/api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
};

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



export const fetchForecastByLocation= (lat, lon) => {
  return axios.get(`http://localhost:8080/api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
};

