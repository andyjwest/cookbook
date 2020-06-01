import React from 'react';
import Title from "./Title";
import './title.scss'

export default {
    title: 'Title',
    component: Title,
};

export const ATitleTest = () => <Title title={'A Title Test'}
                                       titleImage='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/0/BE1B33_Key-Lime-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1386172170553.jpeg'/>

export const WithAllTheThings = () => <Title title={'A Title Test'}
                                       titleImage='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/0/BE1B33_Key-Lime-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1386172170553.jpeg'/>
