import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
     <h2 data-ns-test = "project-name">Weather App</h2>
     <p data-ns-test = "project-description">weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, precipitation in different unites, dew point, wind speed and direction, 
     in addition to ten days in future and hourly weather forecast.</p>
     <h2 data-ns-test = "project-name">Build a Social Media App</h2>
     <p data-ns-test = "project-description">Twitter, Facebook, and Instagram are quite sophisticated, and include an ever-growing number of features to keep users engaged. On top of that, it's the kind of app we likely know best regarding how it should function.</p>
    </div>
  )
}
export default App;
