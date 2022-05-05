import React, { useEffect } from 'react';
import AssignmentsListFolder from '../../../Components/AssignmentsListFolder';

import TeacherHeader from '../../Components/Header';


function TeacherAssignmentsFolder() {

    const activeNav = 'classes'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <AssignmentsListFolder />

            </div>

        </div>
    );
}

export default TeacherAssignmentsFolder;