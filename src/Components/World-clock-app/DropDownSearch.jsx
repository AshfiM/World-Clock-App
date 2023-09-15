import React, { useEffect, useState } from "react";
import "../Style/DropDownSearch.css"
import GetCoordinate from "./CoordinateApi";


const DropDownSearch = ({OpenWeatherMapAPIkey, TimeZoneDBapiKey}) => {
    const [countryList, setCountryList] = useState([])
    const [stateList, setStateList] = useState([])
    const [country, setCountry] = useState("Pakistan")
    const [state, setState] = useState("karachi")
    

    const handleCountry = event => {
        const countryName = event.target.value
        setCountry(countryName);
        setState(" ")
        countryList.map((object) => { 
            if (object.country === countryName) {(setStateList(object.cities))
            }return ""
        })
        
    } 

    const handleState = event => {
        const stateName = event.target.value
        setState(stateName)

    }
    useEffect (() => {
        const getCountryList = async() => {
            
            try {
                const url = "https://countriesnow.space/api/v0.1/countries"
                const response =  await fetch(url);
                const array = await response.json()
                setCountryList(array.data)
            
            }
            catch (error) {
                console.log(error)
            }
            
        }
        getCountryList()
    }, [])

    return (
        <div className="container">
      
            <div className="search-boxes">
           
                <div >
                    <select onChange={handleCountry} className="select-box">
                        <option >Select Country</option>
                        {countryList.map((ctr, i) => {return (<option key={i}>{ctr.country} </option>)})}
                    </select>

                </div>
                    <div >
                        <select onChange={handleState} className="select-box">
                            <option >Select City</option>
                            {stateList.map((ctr, i) => {return (<option key={i} >{ctr} </option>)})}
                        </select>
                    </div>
          
       
            <div className="location-results-box">
                Country : {country.toUpperCase()}<br/>
                City: {state.toUpperCase()}
                <GetCoordinate OpenWeatherAPIKEY={OpenWeatherMapAPIkey} TimeZoneDBAPI={TimeZoneDBapiKey} city={state}/>
            </div>
                <br/>

               
                
            </div>
            
            

        </div>
    )
}


export default DropDownSearch