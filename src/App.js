import React, {useState, useEffect} from "react";
import { Switch, Route,  useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { WeatherProvider } from "./context";
import Loading from "./components/Loading";
import GetStarted from "./components/Started";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
const  App=() => { 
const initialtState = {
  zip:"",
  lat:null,
  lon:null,
  weather: null,
  forecast:null,
}
const [state, setState] = useState(initialtState)
const [forecast, setForecast] = useState(null)
  const history = useHistory();
  const [isFirstMount, setIsFirstMount] = useState(true);
  useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });
    
    return unlisten;
  }, [history, isFirstMount]);
  return (
    <div className="flex flex-col min-h-screen">
    <WeatherProvider value={{state:state, setState:setState, forecast:forecast, setForecast:setForecast}}>
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
