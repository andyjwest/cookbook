import React from "react";
import SimpleView from "./SimpleView";
import recipes from "../../recipes";

export default {
    title: 'Recipe/SimpleView',
    component: SimpleView,
};

const Template = args => <SimpleView {...args}/>

export const Primary = Template.bind({})

Primary.args = recipes[0]


export const Sourdough = Template.bind({})

Sourdough.args = recipes[1]


export const BeefStroganoff = Template.bind({})

BeefStroganoff.args = recipes[4]
