import React from 'react';

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Goodmorning kingara.</h1>
    //     </div>
    // );

    return React.createElement('div',
        {id:'initdiv', className:'stable'},
        React.createElement('h1',
            null,
            'React create element'));
}


export default Hello;