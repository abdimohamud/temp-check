import React, {useState, useEffect} from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { WeatherProvider } from "./context";
import IndexPage from "./pages/index";
import Weather from './pages/weather'




// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)



const App = () => {
 
  const initialState = {
    cityName: "",
    cityId: null,
    stateCode: null,
    countryCode: null,
    zipCode: 98031,
    lat: 47.380852,
    lon: -122.237419,
    weather: null
  };
  const [state, setState] = useState(initialState);
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)  
  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });
    
    return unlisten;
  }, [history, isFirstMount]);
  
 

  return (
    <div className="flex flex-col min-h-screen">
              <WeatherProvider
      value={{
        state:state,
        weather:weather,
        forecast:forecast,}} >

      <Switch location={location} key={location.pathname}>
    <AnimatePresence exitBeforeEnter>
     
      
        <Route
          path="/"
          exact
          component={(props) => (
            <IndexPage isFirstMount={isFirstMount} {...props} />
            )}
            />
            <Route path="/weather" component={(props)=>(<Weather {...props} />)} />
    </AnimatePresence>
      </Switch>
            </WeatherProvider>
      </div>
  );
};

export default App;