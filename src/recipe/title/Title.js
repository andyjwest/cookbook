import React, {useEffect, useState} from 'react'
import {string} from "prop-types"
import './title.scss'

export default function Title({title, titleImage, stepCount}) {

    return <ul>
        <li>{!!stepCount ? <>{title}</> : <h1>{title}</h1>}</li>
        {!!stepCount && <li><h1>Step {stepCount}</h1></li>}
        <li><a>All Ingredients</a></li>
    </ul>
}

Title.propTypes = {
    title: string.isRequired
}
