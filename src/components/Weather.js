import React from 'react'

function Weather(props) {
    

    if (props.city !== undefined && props.country !== undefined) {
        
        
        return (
        
            <div id="output">
                <h3>
                Weather in {props.city}, {props.country}.
                </h3>
                <h4>
                    Description: {props.description}
                </h4>
                <h4>
                Temperature: {Math.round(props.temp)} °C.
                <br />
                Feels like {Math.round(props.feelsLike)} °C.
                </h4>
                <h4>
                    Min: {props.minTemp} °C. 
                    <br />
                    Max: {props.maxTemp} °C.
                </h4>
            </div>
        )
    }    
    else {
        return(null);
    }
}

export default Weather;


