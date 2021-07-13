import React  from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
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
                   
                    
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/2">
                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Weekly Forecast Updates</h1>
                      <p className="leading-relaxed mb-3">See the weather from Mon-Fri, as well as a weekly view for your forecast</p>
                 
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
