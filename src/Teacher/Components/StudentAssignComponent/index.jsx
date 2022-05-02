import React from 'react';

import { BiArrowBack } from 'react-icons/bi';

import './StudentAssignComponent.css';

import StudentsProfileTabs from '../StudentsProfileTabs';
import AssignmentsList from '../../../Components/AssignmentsList';


function StudentAssignComponent() {

    let activeTab = 'assignments'

    return (
        <div id='Courses'>

            <div className='Course-back_title'>
                <a href='/Teacher-students'>
                    <BiArrowBack
                        title='back'
                        size={25}
                        className='Course-BiArrowBack' />
                </a>
            </div>

            <StudentsProfileTabs activeTab={activeTab} />

            <AssignmentsList />

        </div>
    );
}

export default StudentAssignComponent;