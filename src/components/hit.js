import React from 'react'
import PropTypes from 'prop-types'

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
          <td>${rep['$']/60}00h</td><td>feels like ${rep['F']}</td>
          </tr>
          `
        })
      });
  }

const Hit = ({ hit }) => (
  <div className="hit">
    <button onClick={handleClick} value={hit.id}>
     {hit.name}
     </button>
  </div>
)

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

export default Hit
