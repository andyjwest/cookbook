import React from 'react'
import './button.scss'

export default function Button(props){
    return <a className='button'>
        {props.children}
    </a>
}