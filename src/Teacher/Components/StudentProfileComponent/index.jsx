import React from 'react';

import { BiArrowBack } from 'react-icons/bi';

import './StudentProfileComponent.css';

import StudentsProfileTabs from '../StudentsProfileTabs';
import AccountDetails from '../../../Components/AccountDetails';


function StudentProfileComponent() {

    let activeTab = 'profile'

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

            <AccountDetails />

        </div>
    );
}

export default StudentProfileComponent;