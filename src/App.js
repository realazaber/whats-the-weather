import React, { useState} from 'react';
import Weather from './components/Weather';
import './css/main.css';

const apiKey = {
  key: "c65ae928fe770da8a48731205f698b15",
  link: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [weather, setWeather] = useState({});





  let [country, setCountry] = useState(null);
  let [city, setCity] = useState(null);

  function funcSetCountry(country) {
    setCountry(country.target.value);
    console.log(country);
  }

  function funcSetCity(city) {
    setCity(city.target.value);
    console.log("City: " + city);
  }

  let foundWeather = false;
  const findWeather = () => {

    let lookup = require('country-code-lookup');

    console.log("City: " + city);
    console.log("Country: " + country);



    if ((city !== "" || city !== null) && (country !== "" || country !== null)) {
      try {

        country = lookup.byCountry(country).iso2;
        console.log("Country code: " + country);

        fetch(`${apiKey.link}weather?q=${city},${country}&units=metric&appid=${apiKey.key}`)
        .then(res => res.json())
        .then(result => { 
          foundWeather = true;
          
          console.log(result);
          setWeather(result);
          
          console.log(weather);
        });

      } catch (error) {
        alert("Invalid Country or City");
      }
    }
    

  }

  return (
    <div>      
        <div id="searchForm">
          <h3>Country name</h3>
          <input
            type="text"
            required
            onChange={funcSetCountry}
          />
          <h3>City name</h3>
          <input
            type="text"
            required
            onChange={funcSetCity}
          />
          <br /><br />
          <button onClick={findWeather}>
            Search
          </button>
        </div>          
        {(typeof weather.main != "undefined") ? (
        <Weather
          city={weather.name}
          country={weather.sys.country}
          temp={weather.main.temp}
         />

        ) : ('')}
    </div>
  );


}

export default App;
