import React from "react";

const Tag = ({children, color}) => <span className={`w3-tag${color && ' w3-' + color}`}>{children}</span>

export default Tag