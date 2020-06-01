import React from 'react';
import * as PropTypes from 'prop-types'

export default function Amount({value, units, longform}){
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
    cups: 'c',
    count: ''
  }

  if(longform){
    return <div>{value} {units}</div>
  }
  return <div>{value} {typeof unitAbbreviations[units] !== 'undefined' ? unitAbbreviations[units] : units}</div>
}

Amount.propTypes ={
  value: PropTypes.number.isRequired,
  units: PropTypes.string,
  longform: PropTypes.bool
}