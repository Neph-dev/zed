import React from 'react';

// Import icons.
import { HiHome } from 'react-icons/hi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsCalendar2Range } from 'react-icons/bs';
import { SiGooglemessages, SiGoogleclassroom } from 'react-icons/si';
import { GiTeacher } from 'react-icons/gi';
import { MdAccountCircle, MdSchool } from 'react-icons/md';


function TeacherNavigation({ activeNav }) {
    return (
        <div id='LearnerNavigation'>

            <div className='LearnerNavigation-list-content'>

                <a href='/Admin-dashboard'>
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

                <a href='/Admin-school'>
                    <div className={
                        activeNav === 'school' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <MdSchool
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>School</div>
                    </div>
                </a>

                <a href='/Admin-calendar'>
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

                <a href='/Admin-students'>
                    <div className={
                        activeNav === 'students' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <SiGoogleclassroom
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Students</div>
                    </div>
                </a>

                <a href='/Admin-teachers'>
                    <div className={
                        activeNav === 'teachers' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <GiTeacher
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Teachers</div>
                    </div>
                </a>

                <a href='/Admin-messages'>
                    <div className={
                        activeNav === 'messages' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <SiGooglemessages
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Messages</div>
                    </div>
                </a>

                <a href='/Admin-account'>
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