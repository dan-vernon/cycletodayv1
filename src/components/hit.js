import React from 'react'
import PropTypes from 'prop-types'
import {weatherType} from './weather_type.js'

const Hit = ({ hit }) => {
  const handleClick = () => {
    console.log(hit.id)
    const forecastBox = document.getElementById(hit.id)
    fetch(`https://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${hit.id}?res=3hourly&key=${process.env.GATSBY_MO_KEY}`)
      .then(response => response.json())
      .then(data => {
        const today = data.SiteRep.DV.Location.Period[0].Rep
        forecastBox.innerHTML = ""
        today.map((rep) => {
          return forecastBox.innerHTML += `
          <div class="box-row">
            <span><strong>${rep['$']/60}00h</strong></span>
            <span>${weatherType(rep['W'])}</span>
            <span><i class="fas fa-cloud-showers-heavy"></i> ${rep['S']}%</span>
            <span><i class="fas fa-temperature-low"></i> ${rep['T']}C / feels like ${rep['F']}C</span>
            <span><i class="fas fa-wind"></i> ${rep['S']}-${rep['G']}mph ${rep['D']} </span>
          </div>
          `
        })
      });
  }

  return (
  <div className="hit">
    <button onClick={() => handleClick()}>
     {hit.name}
     </button>
     <br />
     <div id={hit.id} className="forecast-box">
     </div>
  </div>
)
}
Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

export default Hit
