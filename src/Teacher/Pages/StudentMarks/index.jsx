import React, { useEffect } from 'react';

import TeacherHeader from '../../Components/Header';
import StudentMarksComponent from '../../Components/StudentMarksComponent';


function TeacherStudentMarks() {

    const activeNav = 'classes'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <StudentMarksComponent />

            </div>
        </div>
    );
}

export default TeacherStudentMarks;