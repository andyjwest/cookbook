import React from 'react';
import MetadataBar from './MetadataBar';

export default {
  title: 'Equipment',
  component: MetadataBar,
};

export const TwoThings = ()=> <MetadataBar equipment={['stand mixer', 'stand mixer whisk']}/>
