import React, { useEffect, useState } from 'react';

// Import styling components.
import '../../Components/LearnerPagesCss/LearnerPages.css';

import LearnerHeader from '../../Components/Header';
import CourseComponent from '../../Components/CourseComponent';


function LearnerCourse() {

    const activeNav = 'courses';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='LearnerPages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='learnerPagesContent'>

                <CourseComponent />

            </div>

        </div>
    );
}

export default LearnerCourse;