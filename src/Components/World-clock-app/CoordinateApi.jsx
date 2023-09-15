import React from "react";
import { useEffect, useState } from "react";
import TimeApi from "./TimeAPI";

const GetCoordinate = ({OpenWeatherAPIKEY, city , TimeZoneDBAPI}) => {
    const [lat, setLat] = useState("6.9387469")
    const [lon, setLon] = useState("67.0207055")
    const [notify, setNotification] = useState(" ")
   
    useEffect(() => {
        const fetchCity = async() => {
        const cityAPIurl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${OpenWeatherAPIKEY}`    
            try {
                if (city === " ") { setNotification("SELECT CITY")
                    }
                const response = await fetch(cityAPIurl);
                if (response.ok) {
                    const cityDetails = await response.json();
                    setLat(cityDetails[0].lat)
                    setLon(cityDetails[0].lon)
                    setNotification("SET COUNTRY")
                }

                else {setNotification("FETCH FAILED")}
            } 
            catch (error) {
            console.log("error", error)
            }

        }
        fetchCity()

    },[city , OpenWeatherAPIKEY, notify])

    return (
        <div >
            
            <div className=""> 
                Latitude : {lat}<br></br> 
                Longitude : {lon}
            </div>
            
    
        <TimeApi latitude={lat} longitude={lon} OpenWeatherAPI={OpenWeatherAPIKEY}/>

                
        <div className="notification" >
            <div className="note">
                {notify}
            </div>
        </div>
        </div>
    )

}



export default GetCoordinate