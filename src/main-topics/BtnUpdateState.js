import React, { Component } from 'react'

class BtnUpdateState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Have a plan of execution.'
        }
    }
    
    clickhandler = () =>{
        if (this.state.message==='Have a plan of execution.'){
            this.setState({
                message:'Consistently execute the plan.'
            })
        }
        else if(this.state.message==='Consistently execute the plan.'){
            this.setState({
                message:'Have a plan of execution.'
            })
        }
       
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickhandler}>update state</button>
            </div>
        )
    }
}

export default BtnUpdateState
