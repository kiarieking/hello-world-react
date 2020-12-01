import React, {Component} from 'react';

class Welcome extends React.Component{
    constructor(){
        super()
        this.state = {
            message: 'i am new to this topic'
        }
    }

    changeChildren(){
        this.setState({
            message:'i have an idea about this topic now.'
        })            
    }
    

    render(){
        const {lang,comp} = this.props
        return (<div>
        <h2>My first component in {lang} is a {comp}</h2>
        {this.state.message}

        <button onClick = {()=>this.changeChildren()}>change prop children</button>
        </div>
        )
    }
}

export default Welcome;