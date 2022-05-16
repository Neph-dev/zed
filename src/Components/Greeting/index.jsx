import React from 'react';

import './Greeting.css';


function Greeting() {
    return (
        <div id='Greeting'>
            <div className='Greeting-greeting'>
                Hello Zed!
            </div>
            <a
                href='https://www.britannica.com/on-this-day'
                target='_blank' rel="noreferrer"
                title='This Day in History' className='Greeting-date'>
                Tuesday, April 19 2022
            </a>
        </div>
    );
}

export default Greeting;