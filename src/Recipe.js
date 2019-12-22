import React from 'react'
import Step from './Step';

export default function Recipe({title, source, yields, steps, serving, titleImage}){
  return (
      <div>
        <img src={titleImage} />
        <h1>{title}</h1>
        <div>{yields}</div>
        <div>{steps.map((step, index) => <Step key={index}{...step}/>)}</div>
      </div>
  )
}