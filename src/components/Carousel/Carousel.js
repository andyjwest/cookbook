import React, {useCallback, useState, useRef} from 'react';
import {arrayOf, element} from "prop-types";
import './Carousel.scss'

export default function Carousel(props) {

    const [activeIndex, setActiveIndex] = useState(0)

    const ListItem = (index, it)=> {
        if(index === activeIndex -1) return <li className='prior' key={index}>{it}</li>
        if(index === activeIndex) return <li className='active' key={index}>{it}</li>
        if(index === activeIndex +1) return <li className='next' key={index}>{it}</li>
        return ''
    }

    return <div className='carousel'>
        <nav className='sidebar'>
            {props.children.map((it, i) => <div onClick={()=> {
                setActiveIndex(i)
            }}>Step {i}</div>)}
        </nav>
        <div className='not-sidebar'>
            <ol>{props.children.map((it, i) => ListItem(i, it))}</ol>
        </div>
    </div>
}

Carousel.propTypes = {
    children: arrayOf(element).isRequired
}
