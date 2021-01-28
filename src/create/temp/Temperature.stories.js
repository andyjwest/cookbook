import React, {useState} from 'react';
import Temperature from "./Temperature";
import {TempUnitTypes, TimeUnitTypes} from "../../PropTypeShapes";

export default {
    title: 'Create/Step/Time',
    component: Temperature,
};

const Template = args => <Temperature {...args} />

const [time, setTime] = useState({
    value: 15,
    units: TempUnitTypes[0],
})

export const SingleValue = Template.bind({})
SingleValue.args = {
    ...time,
    index: 0,
    updateTime: (prop)=> setTime(prop)
}
