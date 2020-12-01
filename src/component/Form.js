import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             select:'Manchester United'
        }
    }

    handleInputChange = (event) => {
        this.setState({
            username: event.target.value
        }
        )
    }
    
    commentChangeHandler = (event)=>{
        this.setState({
            comment:event.target.value
        })
    }

    selectChangehandler = (event)=>{
        this.setState({
            select:event.target.value
        })
    }

    handleSubmit = (event)=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.select}`)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type='text' value={this.state.username}
                         onChange={this.handleInputChange}></input>
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea type='text' value={this.state.comment} 
                        onChange={this.commentChangeHandler}></textarea>
                    </div>
                    <div>
                        <label>Team</label>
                        <select value={this.state.select} onChange={this.selectChangehandler}>
                            <option value='Manchester United'>Manchester United</option>
                            <option value='Chelsea'>Chelsea</option>
                            <option value='Arsenal'>Arsenal</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
