import React from "react";
import {useParams} from "react-router-dom";
import Step from "./Step";

export default function StepContainer(props) {
    const {index} = useParams();
    return <div>{index}</div>
    // return <Step {...props.steps[index]}/>
}
