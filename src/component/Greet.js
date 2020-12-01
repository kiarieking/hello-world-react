import React from 'react';

//function Greet () {
//    return <h1>Hello Kingara,welcome to react.</h1>
//}
const Greet = (props) => {
        const{name,country} = props
    console.log(props);
    return (<div>       
            <h1>Hello {name} from {country}, you're in react now!</h1>
            {props.children}
         </div>
        )
}

export default Greet;