import React, {useState} from 'react';
import Time from "./Time";
import {TimeUnitTypes} from "../../PropTypeShapes";

export default {
    title: 'Create/Step/Time',
    component: Time,
};

const Template = args => <Time {...args} />

const [time, setTime] = useState({
    value: 15,
    units: TimeUnitTypes[0],
})

export const SingleValue = Template.bind({})
SingleValue.args = {
    ...time,
    index: 0,
    updateTime: (prop)=> setTime(prop)
}
