import React, { Component } from 'react'
import ComponentLifecycleB from './ComponentLifecycleB'

class ComponentLifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'lifecycle'
        }
        console.log('Constructor')
        this.changeState=this.changeState.bind(this)
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true    }

    getSnapshotBeforeUpdate(prevState,prevProps){
        console.log('getSnapshotBeforeUpdate')
        return null
    }    

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    changeState(){
        this.setState({
            message:'codevolution'
        })
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Component lifecycle</h1>
                <button onClick={this.changeState}>Change state</button>
                <ComponentLifecycleB></ComponentLifecycleB>
            </div>

        )

    }
}

export default ComponentLifecycle
