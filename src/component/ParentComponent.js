import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parents'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(offspring){
        alert(`Hello ${this.state.parentName} from ${offspring}`)
    }
    

    render() {
        return (
            <div>
              <ChildComponent greetHandler={this.greetParent}/>  
            </div>
        )
    }
}

export default ParentComponent
