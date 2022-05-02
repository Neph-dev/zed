import React, { useEffect } from 'react';

import TeacherHeader from '../../Components/Header';
import TeacherStudentsComponents from '../../Components/TeacherStudentsComponents';


function TeacherStudents() {

    const activeNav = 'classes'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="Pages">

            <TeacherHeader activeNav={activeNav} />

            <div className="PagesContent">

                <TeacherStudentsComponents />

            </div>
        </div>
    );
}

export default TeacherStudents;