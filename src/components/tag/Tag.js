import React from "react";

const Tag = ({children, color}) => <span className={`w3-tag${color && ' w3-' + color}`} style={{margin: 5}}>{children}</span>

export default Tag