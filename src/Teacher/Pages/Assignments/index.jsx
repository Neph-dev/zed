import React, { useEffect } from 'react';
import AssignmentFolders from '../../../Components/AssignmentFolders';

import TeacherHeader from '../../Components/Header';


function TeacherAssignments() {

    const activeNav = 'classes'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <AssignmentFolders />

            </div>

        </div>
    );
}

export default TeacherAssignments;