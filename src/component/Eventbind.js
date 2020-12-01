import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Trying to bind an event?'
        }
        //this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:'You have successfully bound an event.'
    //     })
    // }
  
    clickHandler = () => {
        this.setState({
            message:'Bind event successfull!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/*<button onClick={this.clickHandler.bind(this)}>Event bind</button>*/}
                {/*<button onClick={()=>this.clickHandler()}>Event bind</button>*/}
                <button onClick={this.clickHandler}>Constructor Event bind</button>
            </div>
        )
    }
}

export default Eventbind
