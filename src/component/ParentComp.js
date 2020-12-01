import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'kiarie'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'kiarie'
            })
        }, 3000);
    }

    render() {
        console.log('*****parent component*****')
        return (
            <div>
                Parent Component
                {/* <PureComp name={this.state.name}/>
                <RegularComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
