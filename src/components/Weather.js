import React from 'react'

function Weather(props) {
    

    if (props.city !== undefined && props.country !== undefined) {
        let lookup = require('country-code-lookup');
        
        return (
        
            <div id="output">
                <h3>
                Weather in {props.city}, {props.country}.
                </h3>
                <h4>
                Temperature: {Math.round(props.temp)} degrees celsius.
                <br />
                Feels like {Math.round(props.feelsLike)} degrees.
                </h4>
                <h4>
                    Min: {props.minTemp} Max: {props.maxTemp}
                </h4>
            </div>
        )
    }    
    else {
        return(null);
    }
}

export default Weather;


