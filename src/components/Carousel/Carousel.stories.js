import React from 'react';
import Carousel from './Carousel';
import Step from "../../recipe/step/Step/Step";
import {generateRandomStep} from "../../RandomUtils";


export default {
  title: 'Carousel',
  component: Carousel,
};

export const FourOptions = ()=> {
  const style = {
    width: '300px',
    height: '300px',
    backgroundColor: 'grey'
  }
  return <Carousel>
    <div style={style}>0</div>
    <div style={style}>1</div>
    <div style={style}>2</div>
    <div style={style}>3</div>
  </Carousel>
}

export const RandomSteps = ()=> {
  return <Carousel>
    <Step {...generateRandomStep()} />
    <Step {...generateRandomStep()} />
    <Step {...generateRandomStep()} />
    <Step {...generateRandomStep()} />
  </Carousel>
}
