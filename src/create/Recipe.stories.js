import React from 'react';
import Recipe from "./Recipe";


export default {
  title: 'Create/Recipe',
  component: Recipe,
};

const Template = args => <Recipe {...args} />

export const Primary = Template.bind({})
Primary.args = {

}
