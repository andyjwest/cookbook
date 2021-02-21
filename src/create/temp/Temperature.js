import React, {useState} from "react";
import {TempUnitTypes} from "../../PropTypeShapes";
import {func, number, oneOf} from "prop-types";

const Temperature = ({value, lowerBound, upperBound, units, index, updateTime}) => {
    const [range, setRange] = useState(false)

    return <>
        <h3>Temperature</h3>
        <div>
            <input
                id={`step-${index}-time-value`}
                value={value && value}
                type='number'
                onChange={updateTime('value')}/>}
            <label id={`step-${index}-time-unit-label`}>Units</label>
            <select
                labelId={`step-${index}-time-unit-label`}
                id={`step-${index}-time-units`}
                value={units && units}
                onChange={updateTime('units')}
            >
                {TempUnitTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
        </div>
    </>
}

Temperature.propTypes = {
    value: number,
    lowerBound: number,
    upperBound: number,
    units: oneOf(TempUnitTypes),
    index: number,
    updateTime: func
}

export default Temperature