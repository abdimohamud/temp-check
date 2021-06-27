import React, {useState, useEffect} from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import IndexPage from "./pages/index";



const App = () => {

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
      <Switch location={location} key={location.pathname}>
    <AnimatePresence exitBeforeEnter>
     
      
        <Route
          path="/"
          exact
          component={(props) => (
            <IndexPage isFirstMount={isFirstMount} {...props} />
          )}
        />
    </AnimatePresence>
      </Switch>
      </div>
  );
};

export default App;