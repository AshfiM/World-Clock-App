import React, { useEffect, useState } from "react";
import ResultsBox from "./ResultsBox";

const TimeApi = ({latitude, longitude, OpenWeatherAPI}) => {

    const [timeInfo, setTimeInfo] = useState({})
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OpenWeatherAPI}`

    useEffect (() => {
        const fetchApi = async() => {
            try {
                const response = await fetch(url)
                const jsonData = await response.json()
                setTimeInfo(jsonData)

            } catch (error) {console.log(error)}

     }
     fetchApi()
    }, [ timeInfo, url])

    


    return (
        <div className="time-results-box">
    
            
            <ResultsBox timeOffset={(timeInfo.timezone)/3600}/>
            
        </div>
    )

}

export default TimeApi
