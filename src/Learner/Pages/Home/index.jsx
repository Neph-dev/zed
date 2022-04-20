import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

// Import styling components.
import './LearnerHome.css';
import '../../Components/LearnerPagesCss/LearnerPages.css';

import LearnerHeader from '../../Components/Header';
import MyCoursesComponent from '../../Components/MyCoursesComponent';
import DailyView from '../../Components/CalendarViews/DailyView';
import Greeting from '../../Components/Greeting';


function LearnerHome() {

    const activeNav = 'home'


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

            <LearnerHeader activeNav={activeNav} />

            <div className='learnerPagesContent'>

                <Greeting />

                <DailyView />

                <MyCoursesComponent />

            </div>

        </div>
    );
}

export default LearnerHome;