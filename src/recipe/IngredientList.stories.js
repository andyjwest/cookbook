import React from 'react';
import IngredientList from './IngredientList';
import recipes from '../recipes';


export default {
  title: 'IngredientList',
  component: IngredientList,
};

export const JustDescription = () => <IngredientList
    ingredients={recipes[0].steps.flatMap(step => step.ingredients)
      .filter(it => typeof it !== 'undefined' && typeof it.madeInStep ===
        'undefined')}
/>;