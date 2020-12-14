import React, { Component } from 'react'

class ClassMousePosition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }

    logMousePosition=(e)=>{
        this.setState({
            x:e.clientX, y:e.clientY
        })
        console.log(this.state.x)
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePosition)
    }
    
    render() {
        return (
            <div>
                <h1>Mouse Position</h1>
                <h2>x: {this.state.x}  y:{this.state.y}</h2>
            </div>
        )
    }
}

export default ClassMousePosition
