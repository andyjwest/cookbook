import React from 'react';
import Ingredients from './Ingredients';

export default {
  title: 'Ingredients',
  component: Ingredients,
};

export const JustDescription = () => <Ingredients
    ingredients={[
      {
        'name': 'bread flour',
        'amount': {
          'value': 450,
          'units': 'grams',
        },
      },
      {
        'name': 'water',
        'amount': {
          'value': 310,
          'units': 'grams',
        },
      },
      {
        'name': 'salt',
        'amount': {
          'value': 8,
          'units': 'grams',
        },
      },
      {
        'name': 'feed sourdough starter',
        'amount': {
          'value': 100,
          'units': 'grams',
        },
        'madeInIngredients': 1,
      },
    ]

    }
/>;