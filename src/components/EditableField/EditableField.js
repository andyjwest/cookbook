import React from 'react';
import './editableField.scss'
import * as PropTypes from "prop-types";

export default function EditableField(props){
    return <div className='editable-field'>
        {!props.editable ? props.children[0] : props.children[1]}
    </div>
}

EditableField.propTypes = {
    editable: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.element)
}
