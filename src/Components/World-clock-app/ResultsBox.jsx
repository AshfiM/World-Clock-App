
import React, { useEffect, useState } from "react"
import "../Style/ResultsBox.css"


const ResultsBox = ({timeOffset}) => {

    const [countryTimeInfo, setCountryTimeInfo] = useState("")

    useEffect(() => {
        const UpdateTime = () =>{
            const d = new Date();
            const localTime = d.getTime();
            const localOffset = d.getTimezoneOffset() * 60000;
            const utc = localTime + localOffset;
            const offset = timeOffset; // UTC of Dubai is +04.00
            const updatedTime = utc + (3600000 * offset);

            const updatedTimeNow = new Date(updatedTime).toLocaleString();
            setCountryTimeInfo(updatedTimeNow)
            
        }
        UpdateTime()
        setInterval(() => {UpdateTime()},1000)
    }, [timeOffset, countryTimeInfo])

    

    return (
        
        <div className="time-results-box">
            <h1 className="time-info">TIME INFO</h1>
            Time Zone : {timeOffset} GMT<br/>
            Date: {countryTimeInfo.slice(0,10)}<br/>
            Time: {countryTimeInfo.slice(11)} h
        </div>
    )
}

export default ResultsBox