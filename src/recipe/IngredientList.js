import React from 'react';
import * as PropTypes from 'prop-types'
import './ingredient-list.scss'
import Amount from '../Amount';

export default function IngredientList({ingredients}) {
  return (
      <div className='ingredients'>{!!ingredients && ingredients.map(({amount, name, madeInStep}) =>
          <>
            <Amount {...amount}/>
            <div>{name}{!!madeInStep && <sup>{madeInStep}</sup>}</div>
          </>)}
      </div>
  );
}

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    amount:PropTypes.shape({
      value: PropTypes.number,
      units: PropTypes.string
    }),
    name: PropTypes.string.isRequired,
    madeInStep: PropTypes.number
  }))
}