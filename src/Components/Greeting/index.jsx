import React from 'react';

import './Greeting.css';


function Greeting() {
    return (
        <div id='Greeting'>
            <div className='Greeting-greeting'>
                Hello Zed!
            </div>
            <div className='Greeting-date'>
                Tuesday, April 19 2022
            </div>
        </div>
    );
}

export default Greeting;