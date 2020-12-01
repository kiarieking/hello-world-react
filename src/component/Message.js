import React, {Component} from 'react'

class Message extends React.Component{
    constructor(){
        super()
        this.state = {
            message: 'state in component going well.'
        }
    }

    changeMessage(){
        this.setState({
            message: 'thank you for continuing learning about states.'
        })
        }
    

    render(){
        return (<div>
                     <h3>{this.state.message}</h3>
                     <button onClick={ ()=>this.changeMessage() }>continue learning</button>
                </div>
                )
    }
}

export default Message;