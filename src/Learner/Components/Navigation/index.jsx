import React from 'react';

// Import styling components.
import './LearnerNavigation.css';

// Import icons.
import { HiHome } from 'react-icons/hi';
import { BsCalendar2Range } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
import { SiGooglemessages } from 'react-icons/si';
import { MdAccountCircle, MdOutlineSubject } from 'react-icons/md';



function LearnerNavigation() {
    return (
        <div id='LearnerNavigation'>

            <div className='LearnerNavigation-list-content'>
                <div className='LearnerNavigation-list-el-active'>
                    <HiHome
                        size={25}
                        className='LearnerNavigation-list-icon' />
                    <div className='LearnerNavigation-list-label'>Home</div>
                </div>
                <div className='LearnerNavigation-list-el'>
                    <MdOutlineSubject
                        size={25}
                        className='LearnerNavigation-list-icon' />
                    <div className='LearnerNavigation-list-label'>Courses</div>
                </div>
                <div className='LearnerNavigation-list-el'>
                    <BsCalendar2Range
                        size={25}
                        className='LearnerNavigation-list-icon' />
                    <div className='LearnerNavigation-list-label'>Calendar</div>
                </div>
                <div className='LearnerNavigation-list-el'>
                    <GiCheckMark
                        size={25}
                        className='LearnerNavigation-list-icon' />
                    <div className='LearnerNavigation-list-label'>Marks</div>
                </div>
                <div className='LearnerNavigation-list-el'>
                    <SiGooglemessages
                        size={25}
                        className='LearnerNavigation-list-icon' />
                    <div className='LearnerNavigation-list-label'>Message</div>
                </div>
                <div className='LearnerNavigation-list-el'>
                    <MdAccountCircle
                        size={25}
                        className='LearnerNavigation-list-icon' />
                    <div className='LearnerNavigation-list-label'>Account</div>
                </div>
            </div>

        </div>
    );
}

export default LearnerNavigation;