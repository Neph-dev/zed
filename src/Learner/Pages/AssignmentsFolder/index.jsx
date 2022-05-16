import React, { useEffect } from 'react';

import AssignmentsListFolder from '../../../Components/AssignmentsListFolder';
import LearnerHeader from '../../Components/Header';


function LearnerAssignmentsFolder() {

    const activeNav = 'subjects'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <AssignmentsListFolder />

            </div>

        </div>
    );
}

export default LearnerAssignmentsFolder;