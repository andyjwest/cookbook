import React from 'react'
import {func, oneOf} from "prop-types";
import './floatingContainer.scss'

export default function FloatingContainer(props) {
  let classNames = `floating-container ${props.hPosition} ${props.vPosition}`
  return <div className='float-parent'>
    <div className={classNames}>{props.floatingPanelRender(props)}</div>
    <div>{props.childRender(props)}</div>
  </div>
}

FloatingContainer.propTypes = {
  childRender: func.isRequired,
  floatingPanelRender: func.isRequired,
  hPosition: oneOf(['left', 'right']).isRequired,
  vPosition: oneOf(['top', 'bottom']).isRequired
}