import React from 'react'
import PropTypes from 'prop-types'
import {weatherType} from './weather_type.js'

const Hit = ({ hit }) => {
  const handleClick = () => {
    console.log(hit.id)
    const forecastBox = document.getElementById(hit.id)
    fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${hit.id}?res=3hourly&key=${process.env.GATSBY_MO_KEY}`)
      .then(response => response.json())
      .then(data => {
        const today = data.SiteRep.DV.Location.Period[0].Rep
        forecastBox.innerHTML = ""
        today.map((rep) => {
          return forecastBox.innerHTML += `<tr>
          <td>Today ${rep['$']/60}00h</td>
          <td>${weatherType(rep['W'])} ${rep['S']}% chance of rain</td>
          <td>Temp ${rep['T']}C / feels like ${rep['F']}C</td>
          <td>Wind ${rep['S']}-${rep['G']}mph from ${rep['D']} </td>
          </tr>
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
     <table id={hit.id}>
      Click to load forecast for {hit.name}
     </table>
  </div>
)
}
Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

export default Hit
