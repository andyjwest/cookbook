import React from 'react';
import EditableField from "./EditableField";

export default {
    title: 'Editable Fields',
    component: EditableField,
};

export const SmallTest = () => <EditableField callback={()=>{}} editable={true}>
    <div>Here is a test</div>
    <div>Here is a test</div>
</EditableField>;
