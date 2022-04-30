import React, { useEffect } from 'react';

import LearnerHeader from '../../Components/Header';
import MyCoursesComponent from '../../Components/MyCoursesComponent';


function LearnerSubjects() {

    const activeNav = 'subjects';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <MyCoursesComponent />

            </div>
        </div>
    );
}

export default LearnerSubjects;