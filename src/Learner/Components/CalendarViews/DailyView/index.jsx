import React from 'react';

import './DailyView.css';


function DailyView() {
    return (
        <section id='DailyView-calendar'>
            <div className='DailyView-calendar-title'>
                Planning of the day
            </div>

            <div className='DailyView-calendar'>

                <div
                    style={{ background: '#ffffff' }}
                    className='DailyView-calendar-el'>
                    <div className='DailyView-calendar-time'>
                        <div className='DailyView-calendar-time-label'>
                            08:00 - 09:00
                        </div>
                    </div>
                    <div className='DailyView-calendar-subject'>
                        <div className='DailyView-calendar-subject-title'>
                            Mathmatics
                        </div>
                    </div>
                </div>
                <div
                    style={{ background: '#f2f3f4' }}
                    className='DailyView-calendar-el'>
                    <div className='DailyView-calendar-time'>
                        <div className='DailyView-calendar-time-label'>
                            09:00 - 10:00
                        </div>
                    </div>
                    <div className='DailyView-calendar-subject'>
                        <div className='DailyView-calendar-subject-title'>
                            Mathmatics
                        </div>
                    </div>
                </div>
                <div
                    style={{ background: '#ffffff' }}
                    className='DailyView-calendar-el'>
                    <div className='DailyView-calendar-time'>
                        <div className='DailyView-calendar-time-label'>
                            11:00 - 12:00
                        </div>
                    </div>
                    <div className='DailyView-calendar-subject'>
                        <div className='DailyView-calendar-subject-title-half'>
                            Mathmatics
                        </div>
                    </div>
                </div>
                <div
                    style={{ background: '#f2f3f4' }}
                    className='DailyView-calendar-el'>
                    <div className='DailyView-calendar-time'>
                        <div className='DailyView-calendar-time-label'>
                            12:00 - 13:00
                        </div>
                    </div>
                </div>
                <div
                    style={{ background: '#ffffff' }}
                    className='DailyView-calendar-el'>
                    <div className='DailyView-calendar-time'>
                        <div className='DailyView-calendar-time-label'>
                            13:00 - 14:00
                        </div>
                    </div>
                    <div className='DailyView-calendar-subject'>
                        <div className='DailyView-calendar-subject-title'>
                            Mathmatics
                        </div>
                    </div>
                </div>
                <div
                    style={{ background: '#f2f3f4' }}
                    className='DailyView-calendar-el'>
                    <div className='DailyView-calendar-time'>
                        <div className='DailyView-calendar-time-label'>
                            14:00 - 15:00
                        </div>
                    </div>
                    <div className='DailyView-calendar-subject'>
                        <div className='DailyView-calendar-subject-title'>
                            Mathmatics
                        </div>
                    </div>
                </div>
                <div
                    style={{ background: '#ffffff' }}
                    className='DailyView-calendar-el'>
                    <div className='DailyView-calendar-time'>
                        <div className='DailyView-calendar-time-label'>
                            16:00 - 17:00
                        </div>
                    </div>
                </div>
                <div
                    style={{ background: '#f2f3f4' }}
                    className='DailyView-calendar-el'>
                    <div className='DailyView-calendar-time'>
                        <div className='DailyView-calendar-time-label'>
                            17:00 - 18:00
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DailyView;