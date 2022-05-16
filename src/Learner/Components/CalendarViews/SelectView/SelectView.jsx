import React from 'react';

function SelectView() {
    return (
        <div className='calendar-views'>
            <button className='active'>Day</button>
            <button>Week</button>
            <button>Month</button>
        </div>
    );
}

export default SelectView;