import React from 'react';

// Import icons.
import { HiHome } from 'react-icons/hi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsCalendar2Range } from 'react-icons/bs';
import { SiGooglemessages } from 'react-icons/si';
import { MdAccountCircle } from 'react-icons/md';


function TeacherNavigation({ activeNav }) {
    return (
        <div id='LearnerNavigation'>

            <div className='LearnerNavigation-list-content'>

                <a href='/Teacher-dashboard'>
                    <div className={
                        activeNav === 'home' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <HiHome
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Home</div>
                    </div>
                </a>

                <a href='/Teacher-classes'>
                    <div className={
                        activeNav === 'classes' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <FaChalkboardTeacher
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Classes</div>
                    </div>
                </a>

                <a href='/Learner-calendar'>
                    <div className={
                        activeNav === 'calendar' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <BsCalendar2Range
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Calendar</div>
                    </div>
                </a>

                <a href='/Learner-messages'>
                    <div className={
                        activeNav === 'messages' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <SiGooglemessages
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Message</div>
                    </div>
                </a>

                <a href='/Learner-account'>
                    <div className={
                        activeNav === 'account' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <MdAccountCircle
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Account</div>
                    </div>
                </a>

            </div>

        </div>
    );
}

export default TeacherNavigation;