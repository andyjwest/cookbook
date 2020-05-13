import React, {useEffect, useState} from 'react'
import {string} from "prop-types"
import './title.scss'

export default function Title({title, titleImage}) {

    const [atTop, setAtTop] = useState(true)

    const scrollHandler = (event) => {

    }

    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)
        return document.removeEventListener('scroll', scrollHandler)
    }, [])

    return <nav className='title'>
        <h1>{title}</h1>
        <div/>
    </nav>
}

Title.propTypes = {
    title: string.isRequired
}
