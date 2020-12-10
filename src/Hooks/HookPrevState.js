import React, {useState} from 'react'

function HookPrevState() {
    const initialState=0
    const [count, setcount] = useState(initialState)

    const increment10 = ()=>{
        console.log('im here')
        for(let i=0; i<20; i++){
            setcount(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={()=>setcount(prevCount=>prevCount+1)}>increment</button>
            <button onClick={()=>setcount(prevCount=>prevCount-1)}>decrement</button>
            <button onClick={()=>setcount(prevCount=>prevCount-prevCount)}>reset</button>
            <button onClick={increment10}>increment20</button>
        </div>
    )
}

export default HookPrevState
