import React, { useEffect } from 'react';

// Import styling components.
import '../../Components/LearnerPagesCss/LearnerPages.css';
import './CourseMarks.css';

import LearnerHeader from '../../Components/Header';
import CourseMaksComponent from '../../Components/CourseViews/CourseMaksComponent';


function CourseMarks() {

    const activeNav = 'subjects';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='LearnerPages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='learnerPagesContent'>

                <CourseMaksComponent />

            </div>
        </div>
    );
}

export default CourseMarks;