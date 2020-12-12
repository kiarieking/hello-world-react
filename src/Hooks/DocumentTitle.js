import React,{useState, useEffect} from 'react'

function DocumentTitle() {
    const [count, setcount]=useState(0)
    // document.title = ``
    const clickHandler = ()=>{
        setcount(prevcount=>prevcount+1)
        // document.title=`count : ${count+1}`
    }

    useEffect(()=>{
        document.title = `count : ${count}`
    })
    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={clickHandler}>set doc title</button>
        </div>
    )
}

export default DocumentTitle
