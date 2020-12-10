import React, {useState} from 'react'

function HooksStateObject() {
    const initialState = {firstname:'', lastname:''}
    const [name, setname] = useState(initialState)

    const showname = (e)=>{
        let fname = name.firstname
        let lname = name.lastname
        let fullname = fname+lname

        alert(fullname)
    }
    return (
        <div>
            <input type='text' value={name.firstname} onChange={(e)=>{setname({...name,firstname:e.target.value})}}/>
            <input type='text' value={name.lastname} onChange={e=>setname({...name,lastname:e.target.value})}/>

            <h2>First name: {name.firstname}</h2>
            <h2>Last name: {name.lastname}</h2>
            <button onClick={showname}>show name</button>
        </div>
    )
}

export default HooksStateObject
