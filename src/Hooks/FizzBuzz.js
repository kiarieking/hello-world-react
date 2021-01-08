import React, { Component } from 'react'

export class FizzBuzz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number:"",
             output:"waiting..."
        }
    }

    changHandler = (e)=>{
        this.setState({
            number : e.target.value 
        })
    }
    
    
    clickHandler= ()=>{
        let num = this.state.number
        
        if (num%15===0){
            this.setState({
                output:"FizzBuzz"
            })
        }
        else if(num%3===0){
            this.setState({
                output:"Fizz"
            })
        }
        else if(num%5===0){
            this.setState({
                output:"Buzz"
            })
        }
    }

    render() {
        return (
            <div><h1>Fizz Buzz challenge</h1>
                 
                <label>Enter a number</label>
                <input type='text' 
                value={this.state.number} onChange={this.changHandler}></input>

                <button type='reset' onClick={this.clickHandler}>Fizz Buzz</button>
                <h2>{this.state.output}</h2>
            </div>
        )
    }
}

export default FizzBuzz

