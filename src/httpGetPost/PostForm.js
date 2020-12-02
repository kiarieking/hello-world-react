import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }

    onchangehandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmitHandler = (e)=>{
        e.preventDefault()
        // console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }
    
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label>userId</label>
                    <input type='text' name='userId' value={userId} onChange={this.onchangehandler}/>
                    <label>title</label>
                    <input type='text' name='title' value={title} onChange={this.onchangehandler}/>
                    <label>body</label>
                    <input type='text' name='body' value={body} onChange={this.onchangehandler}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
