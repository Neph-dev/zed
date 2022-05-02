import React, { useEffect } from 'react';

import TeacherHeader from '../../Components/Header';
import StudentProfileComponent from '../../Components/StudentProfileComponent';


function TeacherStudentProfile() {

    const activeNav = 'classes'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <StudentProfileComponent />

            </div>
        </div>
    );
}

export default TeacherStudentProfile;