import React, {useEffect} from 'react'

function MouseXY() {
    let x=0
    let y=0
    const cordinates=(e)=>{
        x=e.clientX
        y=e.clienty
    }

    const mousexy = () =>{
        window.addEventListener('mousemove', cordinates)
    }
    
    useEffect(() => {
        mousexy()
    }, [])
    return (
        <div>
            <h2>X : {x} Y: {y}</h2>
        </div>
    )
}

export default MouseXY
