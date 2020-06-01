import React from "react";
import {string} from "prop-types";
import './text-area-with-header.scss'

export default function TextWithHeader(props) {
    return <div className='text-with-header'>
        <h2>{props.header}</h2>
        <div className='text'>{props.children}</div>
    </div>
}

TextWithHeader.propTypes = {
    header:string.isRequired
}