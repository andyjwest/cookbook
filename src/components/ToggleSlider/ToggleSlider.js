import React from 'react'
import * as PropTypes from 'prop-types'
import './toggle-slider.scss'

export default function ToggleSlider({checked, callback}) {
    return <label className="switch">
        <input type="checkbox" checked={checked} onChange={()=>callback(!checked)}/>
        <span className="slider round"/>
    </label>
}

ToggleSlider.propTypes = {
    checked: PropTypes.bool.isRequired,
    callback: PropTypes.func.isRequired
}
