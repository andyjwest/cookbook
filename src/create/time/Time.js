import React, {useState} from "react";
import {TimeUnitTypes} from "../../PropTypeShapes";
import {func, number, oneOf} from "prop-types";

const Time = ({value, lowerBound, upperBound, units, index, updateTime}) => {
    const [timeRange, setTimeRange] = useState(false)

    return <>
        <h3>Time</h3>
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
                    {TimeUnitTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
        </div>
    </>
}

Time.propTypes = {
    value: number,
    lowerBound: number,
    upperBound: number,
    units: oneOf(TimeUnitTypes),
    index: number,
    updateTime: func
}

export default Time