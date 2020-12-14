import React, {useState, useEffect} from 'react'

function HookMousePosition() {
    const [x, setX]=useState(0)
    const [y, setY]=useState(0)

    const mousemovement = (e)=>{
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(()=>{
        window.addEventListener('mousemove', mousemovement)
    },[])
    return (
        <div>
            <h1>X - {x} Y - {y}</h1>
        </div>
    )
}

export default HookMousePosition
