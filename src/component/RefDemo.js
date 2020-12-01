import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
    this.inputRef = React.createRef() 
    this.clickhandler = this.clickhandler.bind(this)
    }
    
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickhandler(){
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <label>username</label>
                <input type='text' ref={this.inputRef}></input>
                <button onClick={this.clickhandler}>get value</button>
            </div>
        )
    }
}

export default RefDemo
