import React, {useState, useEffect} from "react";
import { Switch, Route,  useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import { WeatherProvider } from "./context";
import GetStarted from "./components/Started";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
const  App=(props) => {
  
const initialtState = {
  cityName: "",
  cityId:null,
  stateCode:null,
  countryCode:null,
  zip:"98031",
  lat:null,
  lon:null,
  weather: null
}
const [state, setState] = useState(initialtState)
  const history = useHistory();
  // const [activeDay, setActiveDay] = useState({});
  const [isFirstMount, setIsFirstMount] = useState(true);
  // const {weather, zip, updateZip, getLocation, lat, lon, forecast} = props
  useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });
    
    return unlisten;
  }, [history, isFirstMount]);
  return (
    <div className="flex flex-col min-h-screen">
    <WeatherProvider value={{state:state, setState:setState}}>
    <Route render={({ location }) => ( 
    <AnimatePresence exitBeforeEnter={true}>
      <Switch location={location} key={location.pathname}>    
        <Route path="/get-started" component ={(props) =>(
          <GetStarted {...props} />
          )} />

        <Route path="/weather" component={(props)=>( <CurrentWeather {...props} />)}/>
        <Route path="/forecast" component={(props) => (<Forecast {...props} />)} />
          <Route
              path="/"
              exact
              component={(props) => (
                <Loading isFirstMount={isFirstMount} {...props} />
              )}
            />
      </Switch>
    </AnimatePresence>
    )} />
  </WeatherProvider>
      
    </div>
  );
}

export default App;
