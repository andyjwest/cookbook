import React from 'react'
import {MemoryRouter} from "react-router-dom";
import Recipe from "./Recipe";
import recipes from '../recipes.js'

export default {
    title: 'Recipe/Page',
    component: Recipe,
}

const Template = args => <Recipe {...args} />

export const Primary = Template.bind({})
Primary.args = recipes[0]
