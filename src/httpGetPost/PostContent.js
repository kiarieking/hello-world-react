import React, { Component } from 'react'
import axios from 'axios'

class PostContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:[],
             errorMSG:''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                this.setState({
                    content:response.data
                })
            })
            .catch(error=>{
                this.setState({
                    errorMSG:'Error displaying content'
                })
            })
    }
    
    render() {
        const {content, errorMSG} = this.state
        return (
            <div>
                Post content
                {
                    content.length?
                    content.map(cont=><div key={cont.id}>{cont.body}</div>):
                    // <h1>{this.state.errorMSG}</h1>
                    null
                }
                {
                    errorMSG? <div>{errorMSG}</div> : null
                }
            </div>
        )
    }
}

export default PostContent
