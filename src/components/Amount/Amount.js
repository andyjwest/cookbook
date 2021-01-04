import React from 'react';
import * as PropTypes from 'prop-types'
import './Amount.scss'

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
    count: '',
    celsius: '° C',
    fahrenheit: '° F'
  }

  if(longform){
    return <span className='amount'>{value} {units}</span>
  }
  return <span className='amount'>{value} {typeof unitAbbreviations[units] !== 'undefined' ? unitAbbreviations[units] : units}</span>
}

Amount.propTypes ={
  value: PropTypes.number.isRequired,
  units: PropTypes.string,
  longform: PropTypes.bool
}
