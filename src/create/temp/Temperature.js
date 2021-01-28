import React, {useState} from "react";
import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {TempUnitTypes} from "../../PropTypeShapes";
import {func, number, oneOf} from "prop-types";

const Temperature = ({value, lowerBound, upperBound, units, index, updateTime}) => {
    const [range, setRange] = useState(false)

    return <>
        <h3>Temperature</h3>
        <div>
            <FormControlLabel
                control={<Checkbox checked={range} onChange={() => setRange(!range)}/>}
                label="Range"
            />
            {range ? <>
                <TextField label='Lower Bound' variant='outlined' value={lowerBound && lowerBound}
                           onChange={updateTime('lowerBound')}/>
                <TextField label='Upper Bound' variant='outlined' value={upperBound && upperBound}
                           onChange={updateTime('upperBound')}/>
            </> : <TextField
                id={`step-${index}-time-value`}
                label='Temperature' variant='outlined'
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
                    {TempUnitTypes.map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
                </Select>
            </FormControl>
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