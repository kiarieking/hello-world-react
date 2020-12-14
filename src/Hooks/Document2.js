import React, {useEffect,useState} from 'react'

function Document2() {
    const [multiplier, setMultiplier] = useState(2)
    const [email,setEmail]=useState('')

    useEffect(()=>{
        console.log(multiplier)
    },[multiplier])
    const clickHandler = (e)=>{
        setMultiplier(prevmulti=>prevmulti+1)
    }

    const changeHandler=(e)=>{
        setEmail(e.target.value)
    }

    return (
        <div>
            <h1>multiplier : {multiplier}</h1>
            <input type='text' value={email} onChange={changeHandler}/>
            <button onClick={clickHandler}>useEffect</button>
        </div>
    )
}

export default Document2
