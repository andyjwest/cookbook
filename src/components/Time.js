import React from 'react'
import moment from "moment";
import {TimeShape} from "../PropTypeShapes";


export default function Time(props) {
  return <div>{moment.duration(props.time.value, props.time.units).humanize()}</div>
}

Time.propTypes = TimeShape