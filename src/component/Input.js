import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
    
        
        this.inputRef=React.createRef()
    }
    
    focusInput=()=>{
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <label>Email</label>
                <input type='text' ref={this.inputRef}></input>
            </div>
        )
    }
}

export default Input
