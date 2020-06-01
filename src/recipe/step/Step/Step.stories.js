import React from 'react'
import Step from "./Step";

export default {
  title: 'Step',
  component: Step
}

export const JustDescription = () => <Step
  description='Combine starter, flour, water, and salt. Mix well until combined. Rest.'
  ingredients={[
    {
      'name': 'bread flour',
      'amount': {
        'value': 450,
        'units': 'grams'
      }
    },
    {
      'name': 'water',
      'amount': {
        'value': 310,
        'units': 'grams'
      }
    },
    {
      'name': 'salt',
      'amount': {
        'value': 8,
        'units': 'grams'
      }
    },
    {
      'name': 'feed sourdough starter',
      'amount': {
        'value': 100,
        'units': 'grams'
      },
      'madeInStep': 1
    }
  ]

  }
/>

export const AllTheThings = () => <Step
  equipment={['stand mixer', 'stand mixer whisk']}
  title='Make Lime Curd'
  ingredients={[
    {
      'name': 'egg yolks',
      'amount': {
        'value': 3,
        'units': 'count'
      }
    },
    {
      'name': 'lime zest',
      'amount': {
        'value': 2,
        'units': 'teaspoons'
      }
    }
  ]}
  time={{ 'value': 5, 'units': 'minutes' }}
  priorStepRequired={false}
  description="In an electric mixer with the wire whisk attachment, beat the egg yolks and lime zest at high speed until very fluffy, about 5 minutes."
/>

export const CrustExmaple = () => <Step
  ingredients={[
    {
      'name': 'graham crackers',
      'amount': {
        'value': 0.3333,
        'units': '1-pound box'
      }
    },
    {
      'name': 'melted butter',
      'amount': {
        'value': 5,
        'units': 'tablespoons'
      }
    },
    {
      'name': 'sugar',
      'amount': {
        'value': 0.3333,
        'units': 'cups'
      }
    }
  ]}
    equipment={['food processor']}
    description="Break up the graham crackers; place in a food processor and process to crumbs. If you don\'t have a food processor, place the crackers in a large plastic bag; seal and then crush the crackers with a rolling pin. Add the melted butter and sugar and pulse or stir until combined."
  />