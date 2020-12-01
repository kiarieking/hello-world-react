import React, { Component } from 'react'

class ClassonClick extends Component {
    classClick(){
        console.log('Class click button handler')
    }
    render() {
        return (
            <div>
                <button onClick={this.classClick}>Class Click</button>
            </div>
        )
    }
}

export default ClassonClick
