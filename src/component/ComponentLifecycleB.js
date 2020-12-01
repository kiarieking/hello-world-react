import React, { Component } from 'react'

class ComponentLifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'lifecycle'
        }
    
        console.log('ConstructorB')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromPropsB')
        return null
    }
    
    componentDidMount(){
        console.log('componentDidMountB')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdateB')
        return true    }

    getSnapshotBeforeUpdate(prevState,prevProps){
        console.log('getSnapshotBeforeUpdateB')
        return null
    }    

    componentDidUpdate(){
        console.log('componentDidUpdateB')
    }


    render() {
        console.log('renderB')
        return (
            <div>
                <h1>Component lifecycle</h1>
                
            </div>

        )

    }
}

export default ComponentLifecycle
