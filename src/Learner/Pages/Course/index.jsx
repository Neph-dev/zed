import React, { useEffect } from 'react';

import LearnerHeader from '../../Components/Header';
import CourseComponent from '../../Components/CourseComponent';


function LearnerCourse() {

    const activeNav = 'subjects';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <CourseComponent />

            </div>

        </div>
    );
}

export default LearnerCourse;