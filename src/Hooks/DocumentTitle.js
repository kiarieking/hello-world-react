import React,{useState, useEffect} from 'react'

function DocumentTitle() {
    const [count, setcount]=useState(0)
    const [name, setname]=useState('')
    const clickHandler = ()=>{
        setcount(prevcount=>prevcount+1)
        // document.title=`count : ${count+1}`
    }

    const changeHandler =(e)=>{
        setname(e.target.value)
    }

    useEffect(()=>{
        console.log('updating document title')
        document.title = `count : ${count}`
    },[count])


    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={clickHandler}>set doc title</button>
            <input type='text' value={name} onChange={changeHandler}/>
        </div>
    )
}

export default DocumentTitle
