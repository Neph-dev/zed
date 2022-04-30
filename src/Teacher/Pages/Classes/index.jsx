import React, { useEffect } from 'react';

import ClassesComponent from '../../Components/ClassesComponent';
import TeacherHeader from '../../Components/Header';


function TeacherClasses() {

    const activeNav = 'classes';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <TeacherHeader activeNav={activeNav} />

            <div className='learnerPagesContent'>

                <ClassesComponent />

            </div>

        </div>
    );
}

export default TeacherClasses;