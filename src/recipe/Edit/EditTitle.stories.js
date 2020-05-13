import React, {useState} from 'react';
import EditTitle from "./EditTitle";


export default {
    title: 'Edit Title',
    component: EditTitle,
};

export const ATitleTest = () => {
    const [title, setTitle] = useState('A Test Title')
    return <EditTitle  onChangeCallback={setTitle} title={title}/>
}
