import React, {useContext, useState, useEffect} from "react"

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from "@react-google-maps/api";
import WeatherContext from "../context";
import axios from "axios";


 

  const libraries = ["places"];
  const mapContainerStyle = {
    height: "50vh",
    width: "50vw",
  };
  const options = {
   
    disableDefaultUI: true,
    zoomControl: true,
  };
  const initalcenter = {
    lat: 43.6532,
    lng: -79.3832,
  };

let key =process.env.GOOGLE_API_KEY

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: key,
        libraries,
      });
    const [center, setCenter] = useState(null)
    const mapRef = React.useRef();
    const {state} = useContext(WeatherContext)
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
      }, []);
    useEffect(() => {
       if (!state.lat || !state.lon){
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${state.zip}`).then(res=>{
        setCenter(res.data.results[0].geometry.location)
        }).catch(err=>console.log(err))
       } else{
           setCenter({lon:state.lat, lat:state.lon})
       }
    }, [state.lat, state.lon, state.zip])
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    return (
        <>
          <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      
        onLoad={onMapLoad}
      ></GoogleMap>
        </>
    )
}

export default Map;