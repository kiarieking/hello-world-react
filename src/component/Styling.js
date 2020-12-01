import React from 'react'
import './Stylesheet.css'
function Styling(props) {
    let className = props.primary? 'primary':''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Too much styling!!</h1>
        </div>
    )
}

export default Styling
