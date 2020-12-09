import React, { Component } from 'react'
import axios from 'axios'

class PostForm2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId:'',
            title:'',
            body:'' 
        }
    }

    onChangeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    onSubmitHandler = (e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response=>{
                console.log(response,'kingara')
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label>userId</label>
                    <input type='text' name='userId' onChange={this.onChangeHandler}/>
                    <label>title</label>
                    <input type='text' name='title' onChange={this.onChangeHandler}/>
                    <label>body</label>
                    <input type='text' name='body' onChange={this.onChangeHandler}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm2
