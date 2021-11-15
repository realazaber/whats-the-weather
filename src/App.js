import React from 'react';

import './css/main.css';

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
  return (
    <div className="main">
      <div id="searchForm">
        <h3>Country name</h3>
        <input
          type="text"
          required
        />
        <h3>City name</h3>
        <input
          type="text"
          required
        />


      </div>
    </div>
  );
}

export default App;
