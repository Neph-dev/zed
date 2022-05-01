import React, { useEffect } from 'react';

import TeacherHeader from '../../Components/Header';
import SubjectComponent from '../../Components/SubjectComponent';


function TeacherSubjectDashboard() {

    const activeNav = 'classes'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="Pages">

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <SubjectComponent />

            </div>
        </div>
    );
}

export default TeacherSubjectDashboard;