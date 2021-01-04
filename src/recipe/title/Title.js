import React, {useEffect, useState} from 'react'
import {string} from "prop-types"
import './title.scss'

export default function Title({title, titleImage, time}) {
    return <ul className='title'>
        <li><h1>{title}</h1>}</li>
        <li><a>All Ingredients</a></li>
    </ul>
}

Title.propTypes = {
    title: string.isRequired
}
