import React, {useState} from 'react'

function HookCounter() {
    let initialState = 40
    const [state1, setstate1] = useState(initialState)

    return (
        <div>
            <h1>Hook Counter</h1>
            <h2>{state1}</h2>
            <button onClick={()=>{setstate1(state1+20)}}>hook increment</button>
        </div>
    )
}

export default HookCounter
