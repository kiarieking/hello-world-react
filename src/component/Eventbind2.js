import React, { Component } from 'react'
import styles from './StyleSheet.module.css'

class Eventbind2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'another event bind'
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(
            {
                message:'event bound'
            }
        )
    }
    
    render() {
        return (
            <div>
                <h2 className={styles.secondary}>{this.state.message}</h2>
                <button onClick={this.handleClick}>Bind event test</button>
            </div>
        )
    }
}

export default Eventbind2
