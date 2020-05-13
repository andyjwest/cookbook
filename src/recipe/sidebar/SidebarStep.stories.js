import React from 'react'
import Step from "./Step";

export default {
  title: 'Sidebar Step',
  component: Step
}

export const EquipmentTempAndDesc = () => <Step
    step={{
      equipment: [
        'Oven'
      ],
      temperature: 350,
      description: 'Preheat the oven to 350 degrees F.'
    }}
    index={0} />

export const Ingredients = () => <Step
    step={{
      'ingredients': [
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
      ],
      'equipment': [
        'food processor'
      ],
      'description': 'Break up the graham crackers; place in a food processor and process to crumbs. If you don\'t have a food processor, place the crackers in a large plastic bag; seal and then crush the crackers with a rolling pin. Add the melted butter and sugar and pulse or stir until combined.'
    }}
index={2}
/>
