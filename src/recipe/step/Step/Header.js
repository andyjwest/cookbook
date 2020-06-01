import React from "react";
import Time from "../../../components/Time";
import {TemperatureShape, TimeShape} from "../../../PropTypeShapes";
import {number, string} from "prop-types";

export default function Header(props) {

    const {time, temperature, title, stepCount} = props

    return <div>
        <h2>{!!title ? {title} : `Step ${stepCount}`}</h2>
        <div>{!!time && <Time time={time}/>} {!!temperature && temperature.value}</div>
    </div>
}

Header.propTypes = {
    time: TimeShape,
    temperature: TemperatureShape,
    title: string,
    stepCount: number.isRequired
}