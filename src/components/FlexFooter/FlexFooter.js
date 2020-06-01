import React from "react"
import {func} from "prop-types"
import './flex-footer.scss'

export const FlexFooter = (props) => <div className='flex-footer'>
    <div>{props.children}</div>
    <div>{props.footerRender()}</div>
</div>

FlexFooter.propTypes = {
    footerRender: func.isRequired
}