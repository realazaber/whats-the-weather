import React, { useState} from 'react';

import './css/main.css';

const displayWeather = () => {

}

const apiKey = {
  key: "c65ae928fe770da8a48731205f698b15",
  link: "https://api.openweathermap.org/data/2.5/"
}

function dateBuilder(d) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  let day = days[dateBuilder(d)];
  let month = months[d.getMonth()];
  let date = d.getDate();
  let year = d.getYear();

  return `${day} ${date} ${month} ${year}`;

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

    console.log("City: " + city);
    console.log("Country: " + country);



    if ((city !== "" || city !== null) && (country !== "" || country !== null)) {
      try {

        country = lookup.byCountry(country).iso2;
        console.log("Country code: " + country);

        fetch(`${apiKey.link}weather?q=${city},${country}&units=metric&appid=${apiKey.key}`)
        .then(res => res.json())
        .then(result => { 
          displayWeather(result);
          console.log(result);
        });
      } catch (error) {
        alert("Invalid Country or City");
      }
    }


  }

  return (
    <div className="main">
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
        <br />
        <button onClick={findWeather}>
          Search
        </button>
      </div>
      <div id="output">

      </div>
    </div>
  );
}

export default App;
