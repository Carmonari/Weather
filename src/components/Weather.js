import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {
  const {name, main} = result;

  if(!name) return null;

  const kelvin = 273.15
  const celsius = parseFloat(main.temp -kelvin, 10).toFixed(2);
  const max = parseFloat(main.temp_max -kelvin, 10).toFixed(2);
  const min = parseFloat(main.temp_min -kelvin, 10).toFixed(2)

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es de: </h2>
        <p className="temperatura">
          {celsius} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura máxima: {max} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura minima: {min} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  )
}

Weather.propTypes = {
  result: PropTypes.object.isRequired,
}

export default Weather;
