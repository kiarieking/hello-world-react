import React, {useState} from 'react'

function PrevStateHook() {
    const detail = {
        username:'',
        password:''
    }
    const [info, setinfo]=useState(detail)

    const changeHandler= (e)=>{
        setinfo({...info,[e.target.name]:e.target.value} )
    }

    const submitHandler = (e)=>{
        alert(info.password)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>username </label>
                <input type='text' name='username' value={info.username} onChange={changeHandler} />
                <label>password</label>
                <input type='text' name='password' value={info.password} onChange={changeHandler}/>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default PrevStateHook
