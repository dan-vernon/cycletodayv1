import React from 'react'
import PropTypes from 'prop-types'

const handleClick = (event) => {
  console.log(event.target.value)
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
