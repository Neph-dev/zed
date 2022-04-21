import React from 'react';

import './Day.css';


function Day() {
    return (
        <div id='Day'>
            <div className='Day-day-label'>
                Tuesday
            </div>
            <div className='Day-calendar'>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>8 am</div>
                    <div className='Day-activity-container'>
                        <div className='Day-activity-full'>Mathmatics</div>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>9 am</div>
                    <div className='Day-activity-container'>
                        <div className='Day-activity-half'>Biology</div>
                        <div className='Day-activity-half-canceled'>
                            <div>French</div> <div className='Day-cancel-label'>Canceled</div>
                        </div>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>10 am</div>
                    <div className='Day-activity-container'>
                        <div className='Day-activity-full'>Sport</div>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>11 am</div>
                    <div className='Day-activity-container'>
                        <div className='Day-activity-half'>Sport</div>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>12 pm</div>
                    <div className='Day-activity-container'>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>1 pm</div>
                    <div className='Day-activity-container'>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>2 pm</div>
                    <div className='Day-activity-container'>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>3 pm</div>
                    <div className='Day-activity-container'>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>4 pm</div>
                    <div className='Day-activity-container'>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>5 pm</div>
                    <div className='Day-activity-container'>
                    </div>
                </div>
                <div className='Day-hour_activity'>
                    <div className='Day-hour'>6 pm</div>
                    <div className='Day-activity-container'>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Day;