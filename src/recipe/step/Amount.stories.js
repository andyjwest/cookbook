import React from 'react';
import Amount from './Amount';

export default {
  title: 'Amount',
  component: Amount,
};

export const teaspoons = ()=> <Amount value={5} units='teaspoons'/>
export const tablespoons = ()=> <Amount value={5} units='tablespoons'/>
export const pints = ()=> <Amount value={5} units={'pints'}/>
export const quarts = ()=> <Amount value={5} units='quarts'/>
export const gallons = ()=> <Amount value={5} units={'gallons'}/>
export const milliliters = ()=> <Amount value={5} units='milliliters'/>
export const liters = ()=> <Amount value={5} units={'liters'}/>
export const pounds = ()=> <Amount value={5} units='pounds'/>
export const ounces = ()=> <Amount value={5} units={'ounces'}/>
export const grams = ()=> <Amount value={5} units='grams'/>
export const count = ()=> <Amount value={5} units={'count'}/>
export const fluidOunces = () => <Amount value={5} units='fluid ounces' />
export const largeGrams = () => <Amount value={1200} units='grams' />
export const unknownUnits = () => <Amount value={1200} units='unknown' />
