import React from 'react';
import MetadataBar from './MetadataBar';

export default {
    title: 'Metadata Bar',
    component: MetadataBar,
};

export const Everything = () => <MetadataBar equipment={['stand mixer', 'stand mixer whisk']}
                                             temperature={{value: 230, units: 'celsius'}}
                                             time={{value: 5, units: 'minutes'}}/>

export const JustEquipment = () => <MetadataBar equipment={['stand mixer', 'stand mixer whisk']}/>

export const JustTemp = () => <MetadataBar temperature={{value: 230, units: 'celsius'}}/>

export const JustTime = () => <MetadataBar time={{value: 5, units: 'minutes'}}/>

export const TimeTemp = () => <MetadataBar temperature={{value: 230, units: 'celsius'}}
                                           time={{value: 5, units: 'minutes'}}/>

export const EquipmentTemp = () => <MetadataBar equipment={['stand mixer', 'stand mixer whisk']}
                                                temperature={{value: 230, units: 'celsius'}}/>

export const EquipmentTime = () => <MetadataBar equipment={['stand mixer', 'stand mixer whisk']}
                                                time={{value: 5, units: 'minutes'}}/>
