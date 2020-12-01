//Conditional Rendering
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn:true
        }
    }
    

    render() {
        // if(this.state.loggedIn===true){
        //     return (
        //         <div>
        //            <h3>Welcome Kingara! </h3>
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             <h3>Welcome new User!</h3>
        //         </div>
        //     )
        // }

        // let message
        // if (this.state.loggedIn===true){
        //     message = <div>Welcome Kingara kk! react-js</div>
        // }
        // else(
        //     message = <div>Welcome new User! js-react</div>
        // )
        
        // return this.state.loggedIn ?(
        //     <div>Welcome Kelvin Kingara!</div>
        // ):
        // (<div>Welcome new User!</div>)

        return(this.state.loggedIn && <div>Welcome Kingara KK</div>)
       
    }
}

export default UserGreeting
