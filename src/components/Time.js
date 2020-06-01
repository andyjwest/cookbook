import React from 'react'
import moment from "moment";


export default function Time(props) {
  return <div>{moment.duration(props.time.value, props.time.units).humanize()}</div>
}