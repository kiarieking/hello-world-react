import React, { Component } from 'react'

class Classcounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        this.countHandler=this.countHandler.bind(this)
    }

    countHandler(){
        this.setState(
            {
                count:this.state.count+5
            }
        )
        console.log(this.state.count)
    }
    
    render() {
        return (
            <div>
               <h2>{this.state.count}</h2> 
               <button onClick={this.countHandler}>class count</button>
            </div>
        )
    }
}

export default Classcounter
