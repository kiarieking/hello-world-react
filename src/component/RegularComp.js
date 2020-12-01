import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log('regular component')
        return (
            <div>
               Regular component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
