import React from 'react'
import * as PropTypes from 'prop-types'

export default function EditTitle({title, onChangeCallback}) {
    return <h1><input type='text' value={title} onChange={event => onChangeCallback(event.target.value)}/></h1>
}

EditTitle.propTypes = {
    title: PropTypes.string,
    onChangeCallback: PropTypes.func.isRequired
}
