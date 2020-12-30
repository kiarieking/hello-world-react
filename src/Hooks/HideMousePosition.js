import React, {useState}from 'react'
import HookMousePosition from './HookMousePosition'

function HideMousePosition() {
    const [display, setDisplay]=useState(true)

    const clickHandler = ()=>{
        setDisplay(false)
    }
    return (
        <div>
            <button onClick={clickHandler}>Toggle display</button>
            {display && <HookMousePosition/>}
        </div>
    )
}

export default HideMousePosition
