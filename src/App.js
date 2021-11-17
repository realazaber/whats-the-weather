import React, { Fragment, useState} from 'react';
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

  
  const findWeather = () => {

    let lookup = require('country-code-lookup');

    city = city.trim();
    country = country.trim();

    city = city.charAt(0).toUpperCase() + city.slice(1);
    country = country.charAt(0).toUpperCase() + country.slice(1);


    
    console.log("City: " + city);
    console.log("Country: " + country);



    if ((city !== "" || city !== null) && (country !== "" || country !== null)) {
      try {

        country = lookup.byCountry(country).iso2;
        console.log("Country code: " + country);

        fetch(`${apiKey.link}weather?q=${city},${country}&units=metric&appid=${apiKey.key}`)
        .then(res => res.json())
        .then(result => { 
          
          
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
    <Fragment>
          <div id="mainContainer">      
      <main>
        <h1>
          What is the weather?
        </h1>
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
          feelsLike={weather.main.feels_like}
          minTemp={weather.main.temp_min}
          maxTemp={weather.main.temp_max}
          description={weather.weather[0].main}
         />

        ) : (
          <h3 id="fillInPrompt">
            Please fill in country name and city name.
          </h3>
        )}

        <div id="test">

        </div>




      </main>
    </div>
          <div id="footer">
          <p>
            &copy; Therealcoolpup
            <br />
            Made with openweather API
          </p>
        </div>
    </Fragment>
  );


}

export default App;
