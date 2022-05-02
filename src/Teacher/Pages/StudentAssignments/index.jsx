import React, { useEffect } from 'react';

import TeacherHeader from '../../Components/Header';
import StudentAssignComponent from '../../Components/StudentAssignComponent';


function TeacherStudentAssign() {

    const activeNav = 'classes'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <StudentAssignComponent />

            </div>
        </div>
    );
}

export default TeacherStudentAssign;