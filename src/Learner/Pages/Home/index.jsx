import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

// Import styling components.
import './LearnerHome.css';
import '../../Components/LearnerPagesCss/LearnerPages.css';

import LearnerHeader from '../../Components/Header';


function LearnerHome() {

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='LearnerPages'>

            <Helmet>
                <title>Welcome to Zed</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/' />
            </Helmet>

            <LearnerHeader />

            <div className='learnerPagesContent'>

                <div className='LearnerHome-greeting_date'>
                    <div className='LearnerHome-greeting'>
                        Hello Zed!
                    </div>
                    <div className='LearnerHome-date'>
                        Tuesday, April 19 2022
                    </div>
                </div>

                <section id='LearnerHome-time-table'>
                    <div className='LearnerHome-time-table-title'>
                        Planning of the day
                    </div>

                    <div className='LearnerHome-time-table'>

                        <div
                            style={{ background: '#ffffff' }}
                            className='LearnerHome-time-table-el'>
                            <div className='LearnerHome-time-table-time'>
                                08:00 - 09:00
                            </div>
                            <div className='LearnerHome-time-table-subject'>
                                Mathmatics
                            </div>
                        </div>
                        <div
                            style={{ background: '#f2f3f4' }}
                            className='LearnerHome-time-table-el'>
                            <div className='LearnerHome-time-table-time'>
                                09:00 - 10:00
                            </div>
                            <div
                                className='LearnerHome-time-table-subject'>
                                Mathmatics
                            </div>
                        </div>
                        <div
                            style={{ background: '#ffffff' }}
                            className='LearnerHome-time-table-el'>
                            <div className='LearnerHome-time-table-time'>
                                11:00 - 12:00
                            </div>
                            <div className='LearnerHome-time-table-subject-half'>
                                Mathmatics
                            </div>
                        </div>
                        <div
                            style={{ background: '#f2f3f4' }}
                            className='LearnerHome-time-table-el'>
                            <div className='LearnerHome-time-table-time'>
                                12:00 - 13:00
                            </div>
                        </div>
                        <div
                            style={{ background: '#ffffff' }}
                            className='LearnerHome-time-table-el'>
                            <div className='LearnerHome-time-table-time'>
                                13:00 - 14:00
                            </div>
                            <div className='LearnerHome-time-table-subject'>
                                Mathmatics
                            </div>
                        </div>
                        <div
                            style={{ background: '#f2f3f4' }}
                            className='LearnerHome-time-table-el'>
                            <div className='LearnerHome-time-table-time'>
                                14:00 - 15:00
                            </div>
                            <div className='LearnerHome-time-table-subject'>
                                Mathmatics
                            </div>
                        </div>
                        <div
                            style={{ background: '#ffffff' }}
                            className='LearnerHome-time-table-el'>
                            <div className='LearnerHome-time-table-time'>
                                16:00 - 17:00
                            </div>
                        </div>
                        <div
                            style={{ background: '#f2f3f4' }}
                            className='LearnerHome-time-table-el'>
                            <div className='LearnerHome-time-table-time'>
                                17:00 - 18:00
                            </div>
                        </div>
                    </div>
                </section>

                <section id='LearnerHome-myCourses'>

                    <div className='LearnerHome-myCourses-title'>
                        My Courses
                    </div>
                    <div className='LearnerHome-myCourses-cards'>
                        <div className='LearnerHome-myCourses-card'>
                            <div className='LearnerHome-myCourses-card-subject'>
                                Mathmatics
                            </div>
                        </div>
                        <div className='LearnerHome-myCourses-card'>
                            <div className='LearnerHome-myCourses-card-subject'>
                                Physics
                            </div>
                        </div>
                        <div className='LearnerHome-myCourses-card'>
                            <div className='LearnerHome-myCourses-card-subject'>
                                French
                            </div>
                        </div>
                        <div className='LearnerHome-myCourses-card'>
                            <div className='LearnerHome-myCourses-card-subject'>
                                Chemestry
                            </div>
                        </div>
                        <div className='LearnerHome-myCourses-card'>
                            <div className='LearnerHome-myCourses-card-subject'>
                                Sport
                            </div>
                        </div>
                        <div className='LearnerHome-myCourses-card'>
                            <div className='LearnerHome-myCourses-card-subject'>
                                English
                            </div>
                        </div>
                    </div>

                </section>

            </div>

        </div>
    );
}

export default LearnerHome;