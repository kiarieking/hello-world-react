import React from 'react'
import Props from './Props'

function Fprop(props) {
    return (
        <div>
            <Props school='Chuka University'/>
            {props.name}
        </div>
    )
}

export default Fprop
