import React from 'react'
import Input from './Input'

// function FRinput() {
//     return (
//         <div>
//             <input type='text'/>
//         </div>
//     )
// }

const FRinput = React.forwardRef((props,ref)=>{
    return (
        <div>
            <input ref={ref}/>
        </div>
    )
})

export default FRinput
