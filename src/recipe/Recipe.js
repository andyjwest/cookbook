import React from 'react';
import Step from './Step';
import './recipe.scss';

export default function Recipe({title, source, yields, steps, serving, id, titleImage, description}) {
  //Fixme Combine the same things (maybe based on config)
  const mainIngredients = steps.flatMap(step => step.ingredients)
      .filter(it => typeof it !== 'undefined' && typeof it.madeInStep ===
          'undefined');

  return (
      <div className='recipe'>
        <h1>{title}</h1>
        <div>
          <img src={titleImage} alt={title}/>
          <div>
            <h2>Ingredients</h2>
            <div>{mainIngredients.map(it => <Ingredient {...it}/>)}</div>
            <h2>Yields</h2>
            <div>{yields}</div>
          </div>
        </div>
        <div className='steps'>{steps.map((step, index) => <Step key={index}{...step}/>)}</div>
      </div>
  );
}

function Ingredient({name, amount, madeInStep}) {
  return (
      <div>
        <div>{!!amount && `${amount.value} ${amount.units}`}</div>
        <div>{name}{!!madeInStep && <sup>{madeInStep}</sup>}</div>
      </div>);
}