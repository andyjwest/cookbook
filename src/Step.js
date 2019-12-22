import React from 'react';

export default function Step({equipment, temperature, description, ingredients, time, priorStepRequired}) {
  return (
      <div className='step'>
        {!!ingredients &&
        <div>{ingredients.map(ingredient => Ingredients(ingredient))}</div>}
        <div>{description}</div>
      </div>
  );
}

const Ingredients = ({name, amount, madeInStep}) => <div>
  <div> {name}</div>
</div>;