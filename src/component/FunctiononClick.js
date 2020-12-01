import React from 'react'

function FunctiononClick() {
    function clickHandler(){
        console.log('you clicked me')
    }
    return (
        <div>
            <button onClick={clickHandler}>click me</button>
        </div>
    )
}

export default FunctiononClick
