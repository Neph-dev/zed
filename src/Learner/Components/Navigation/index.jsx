import React from 'react';

// Import styling components.
import './LearnerNavigation.css';

// Import icons.
import { HiHome } from 'react-icons/hi';
import { BsCalendar2Range } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
import { SiGooglemessages } from 'react-icons/si';
import { MdAccountCircle, MdOutlineSubject } from 'react-icons/md';



function LearnerNavigation({ activeNav }) {
    return (
        <div id='LearnerNavigation'>

            <div className='LearnerNavigation-list-content'>

                <a href='/'>
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

                <a href='/Learner-courses'>
                    <div className={
                        activeNav === 'courses' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <MdOutlineSubject
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Courses</div>
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

                <a href='/Learner-marks'>
                    <div className={
                        activeNav === 'marks' ?
                            'LearnerNavigation-list-el-active'
                            : 'LearnerNavigation-list-el'}>
                        <GiCheckMark
                            size={25}
                            className='LearnerNavigation-list-icon' />
                        <div className='LearnerNavigation-list-label'>Marks</div>
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

export default LearnerNavigation;