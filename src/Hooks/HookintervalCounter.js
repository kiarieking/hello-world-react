import React,{useState,useEffect} from 'react'

function HookintervalCounter() {
    const[count, setcount]=useState(0)
    
    const counter = ()=>{
        setcount(prevcount=>prevcount+1)
    }

    useEffect(()=>{
        const interval = setInterval(counter, 1000)

        return ()=>{
            clearInterval(interval)
        }
    })
    return (
        <div>
           <h2>new year push: {count}</h2> 
        </div>
    )
}

export default HookintervalCounter
