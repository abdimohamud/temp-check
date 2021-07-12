import React, {useContext} from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import WeatherContext from '../context'
const Home = () => {
  const {state, setState} = useContext(WeatherContext)
  console.log(state)
    return (
        <div>
            <section className="text-gray-600 body-font">
              
              <div className="container px-5 py-24 mx-auto">
              <div className="text-center mb-20">
                  <div style={{display:'flex', justifyContent:'center'}} ><h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Temp Check </h1><img style={{width:'5%'}} src={logo} alt="logo"/></div>
                  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">The app that's self-titled and also self-explanatory.</p>
                </div>
                <div className="flex -m-4">
                  <div className="p-4 lg:w-1/2">
                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Advanced Weather Analytics</h1>
                      <p className="leading-relaxed mb-3">View information such as humidity, precipitation, wind/gust speeds.</p>
                      <a className="text-indigo-500 inline-flex items-center">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>6
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/2">
                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Weekly Forecast Updates</h1>
                      <p className="leading-relaxed mb-3">See the weather from Mon-Fri, as well as a weekly view for your forecast</p>
                      <a className="text-indigo-500 inline-flex items-center">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>6
                        </span>
                      </div>
                    </div>
                  </div>
                   </div>
              </div>
              <Link to ="/get-started"><button className="transition delay-150 duration-300 ease-in-out flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started!</button></Link>
            </section>
        </div>
    )
}

export default Home
