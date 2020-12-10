import React, { Component } from 'react'

class CounterHook extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    clickHandler=()=>{
        this.setState({
            count:this.state.count+5
        })
    }
    render() {
        return (
            <div>
               <h1>Count : {this.state.count}</h1> 
               <button onClick={this.clickHandler}>Count Increment</button>
            </div>
        )
    }
}

export default CounterHook
