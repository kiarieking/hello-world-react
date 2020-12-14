import React, {useState}from 'react'

function HookStateCard() {
    const checkname = {
        name:'',
        check_name:false
    }
    const [x,setx]=useState(checkname)

    const checkboxHandler =(e)=>{
        const {checked} = e.target
        setx({
            ...x,
            check_name:checked
        })
    }
    const changeHandler=(e)=>{

    }
    const clickHandler=(e)=>{
        alert(x.check_name)
    }

    return (
        <div>
            <form>
                <label>name</label>
                <input type='text' name='name' value={x.name} onChange={changeHandler}/>
                <label>check name</label>
                <input type='checkbox' value={x.check_name} onChange={checkboxHandler}/>
                <button onClick={clickHandler}>submit</button>
            </form>
        </div>
    )
}

export default HookStateCard
