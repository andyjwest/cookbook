import React from 'react';
import * as PropTypes from 'prop-types'

export default function Amount({value, units}){
  const unitAbbreviations = {
    teaspoons: 'tsp',
    tablespoons: 'tbsp',
    'fluid ounces': 'fl oz',
    pints: 'pt',
    quarts: 'qt',
    gallons: 'gal',
    milliliters: 'ml',
    liters:'l',
    pounds: 'lb',
    ounces: 'oz',
    grams: 'g',
    count: ''
  }

  return (
      <div>{value} {!!unitAbbreviations[units] ? unitAbbreviations[units] : units}</div>
  )
}

Amount.propTypes ={
  value: PropTypes.number,
  units: PropTypes.string
}