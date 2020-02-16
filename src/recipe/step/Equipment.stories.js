import React from 'react';
import Equipment from './Equipment';

export default {
  title: 'Equipment',
  component: Equipment,
};

export const TwoThings = ()=> <Equipment equipment={['stand mixer', 'stand mixer whisk']}/>
