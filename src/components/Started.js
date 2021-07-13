import React, {useState, useEffect, useContext} from 'react'
import Modal from "react-modal";
import { useHistory } from 'react-router-dom';
import reverseGeocode from 'latlng-to-zip'
import WeatherContext from '../context';


Modal.setAppElement("#root");
let key = process.env.REACT_APP_GOOGLE_API_KEY
const GetStarted = () => {
  let history = useHistory()
  const {state, setState } = useContext(WeatherContext)
  const [zipcode, setZipCode] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const reverseGeo = (loco) => {
    return reverseGeocode(loco, key);
  }
  const findGeo = e => {
    e.preventDefault()

    if (!navigator.geolocation){
      console.log('doesnt exist')
    }
    function onSuccess(position) {
      const {
          latitude,
          longitude
      } = position.coords;

      setState({...state, lat:latitude, lon:longitude}) 
      let loco = {latitude, longitude};

  reverseGeo(loco).then(zipcode => setState({...state, zip:zipcode})).catch(err => console.log(err));
  }

  // handle error case
  function onError(err) {
     console.log(err)
  }
 navigator.geolocation.getCurrentPosition(onSuccess, onError);
  

  }
 
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
   if (state.zip.length>0 || !state.lat || !state.lon){
     setIsOpen(true)
   } else{
     history.push('/weather')
   }
  },[state.zip.length, state.lat, state.lon, history] )


    return (
  <> 



<Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div onClick={toggleModal}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
        <div><p>Oh! It Looks like you haven't configured your location.</p></div>
        <br/>
        <div>Please click <button onClick={(e)=>{findGeo(e)}}> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> </button> to find your location</div>
        <br/>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <p>Or Enter your ZipCode</p>
        <br/>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
  
        <label htmlFor="zip-code" className="leading-7 text-sm text-gray-600"></label>
        <input value={zipcode.zip} onChange={(e)=>{ setZipCode({...zipcode,[e.target.name]:e.target.value})  } } type="text" id="zip-code" name="zip" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
  
      </div>
    </div>
    <br/>
    <div style={{display:'flex', justifyContent:'center'}}>
    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"  onClick={(e)=>{e.preventDefault();  setState({...state, zip:zipcode.zip});setIsOpen(false); history.push('/weather')}}>Submit</button>
      </div>
      </Modal>
  </>
    )
}

export default GetStarted
