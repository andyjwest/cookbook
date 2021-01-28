import React from 'react';
import Step from "./Step";

export default {
  title: 'Create/Step',
  component: Step,
};

const Template = args => <Step {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: "Preshape",
  description: "Cut dough out of bowl onto a floured counter. Stretch and fold the dough into a ball around 6 times. Flip and rest on counter.",
  ingredients: [
    {
      "name": "dough",
      "madeInStep": 3
    }
  ],
  time: {
    "lowerBound": 0.5,
    "upperBound": 1.5,
    "units": "hours"
  },
  updateStep: (value)=> console.log(value),
  index: 0
}

export const KeyLimePie = Template.bind({})
KeyLimePie.args = {
  "ingredients": [
    {
      "name": "graham crackers",
      "amount": {
        "value": 150,
        "units": "grams"
      }
    },
    {
      "name": "melted butter",
      "amount": {
        "value": 71,
        "units": "grams"
      }
    },
    {
      "name": "sugar",
      "amount": {
        "value": 67,
        "units": "grams"
      }
    }
  ],
  "equipment": [
    "food processor"
  ],
  "description": "Break up the graham crackers; place in a food processor and process to crumbs. If you don't have a food processor, place the crackers in a large plastic bag; seal and then crush the crackers with a rolling pin. Add the melted butter and sugar and pulse or stir until combined.",
  updateStep: (value)=> console.log(value),
  index: 0
}
