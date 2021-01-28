import React, {useState} from "react";
import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {TimeUnitTypes} from "../../PropTypeShapes";
import {func, number, oneOf} from "prop-types";

const Time = ({value, lowerBound, upperBound, units, index, updateTime}) => {
    const [timeRange, setTimeRange] = useState(false)

    return <>
        <h3>Time</h3>
        <div>
            <FormControlLabel
                control={<Checkbox checked={timeRange} onChange={() => setTimeRange(!timeRange)}/>}
                label="Time Range"
            />
            {timeRange ? <>
                <TextField label='Lower Bound' variant='outlined' value={lowerBound && lowerBound}
                           onChange={updateTime('lowerBound')}/>
                <TextField label='Upper Bound' variant='outlined' value={upperBound && upperBound}
                           onChange={updateTime('upperBound')}/>
            </> : <TextField
                id={`step-${index}-time-value`}
                label='Time' variant='outlined'
                value={value && value}
                type='number'
                onChange={updateTime('value')}/>}
            <FormControl variant="outlined">
                <InputLabel id={`step-${index}-time-unit-label`}>Units</InputLabel>
                <Select
                    labelId={`step-${index}-time-unit-label`}
                    id={`step-${index}-time-units`}
                    value={units && units}
                    onChange={updateTime('units')}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {TimeUnitTypes.map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
                </Select>
            </FormControl>
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