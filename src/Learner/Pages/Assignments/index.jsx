import React, { useEffect } from 'react';

import AssignmentFolders from '../../../Components/AssignmentFolders';
import LearnerHeader from '../../Components/Header';


function LearnerAssignments() {

    const activeNav = 'subjects'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <AssignmentFolders to='/Learner-assignment-folder' />

            </div>

        </div>
    );
}

export default LearnerAssignments;