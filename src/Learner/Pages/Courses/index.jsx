import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';

// Import styling components.
import '../../Components/LearnerPagesCss/LearnerPages.css';
import './LearnerCourses.css';

import LearnerHeader from '../../Components/Header';
import MyCoursesComponent from '../../Components/MyCoursesComponent';


function LearnerCourses() {

    const activeNav = 'courses';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='LearnerPages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='learnerPagesContent'>

                <MyCoursesComponent />

            </div>
        </div>
    );
}

export default LearnerCourses;