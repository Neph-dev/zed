import React, { useEffect } from 'react';

import TeacherHeader from '../../Components/Header';
import SubjectListComponent from '../../Components/SubjectListComponent';


function TeacherSubjects() {

    const activeNav = 'classes'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <SubjectListComponent />

            </div>

        </div>
    );
}

export default TeacherSubjects;