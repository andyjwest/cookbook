import React from 'react';
import './step.scss';
import Ingredients from './Ingredients';
import * as PropTypes from 'prop-types';
import Equipment from './Equipment'

export default function Step({equipment, temperature, description, ingredients, time, priorStepRequired}) {
  return (
      <div className='step'>
        <Ingredients ingredients={ingredients}/>
        <div>
          {!!equipment && <Equipment equipment={equipment} />}
          <div>{description}</div>
        </div>
      </div>
  );
}

Step.propTypes = {
  equipment: PropTypes.arrayOf(PropTypes.string),
  temperature: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.shape({
      value: PropTypes.number,
      units: PropTypes.string,
    }),
  })),
  time: PropTypes.shape({
    value: PropTypes.number,
    units: PropTypes.string,
  }),
  priorStepRequired: PropTypes.bool,
};