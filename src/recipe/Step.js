import React from 'react';
import './step.scss'

export default function Step({equipment, temperature, description, ingredients, time, priorStepRequired}) {
    return (
        <div>
            {!!ingredients && ingredients.map(ingredient => <Ingredient {...ingredient} />)}
            <div>{description}</div>
        </div>
    );
}

function Ingredient({name, amount, madeInStep}) {
  return (
      <>
        <div>{!!amount && `${amount.value} ${amount.units}`}</div>
        <div>{name}{!!madeInStep && <sup>{madeInStep}</sup>}</div>
      </>);
}