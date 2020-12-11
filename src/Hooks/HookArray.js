import React, {useState} from 'react'

function HookArray() {
    const ino = [1,]
    const [items, setItems]=useState([1,2,3])

    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>add item</button>
            <ul>
                {   items.length?
                    items.map(item=>(<li key={item.id}>{item.value}</li>)):
                    null
                }
                
            </ul>
        </div>
    )
}

export default HookArray
