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

    const widgetList = [
        {
            id: 1,
            to: '/Learner-dashboard',
            title: 'home',
            icon: <HiHome
                size={25}
                className='LearnerNavigation-list-icon' />,
            className:
                activeNav === 'home' ?
                    'LearnerNavigation-list-el-active'
                    : 'LearnerNavigation-list-el'

        },
        {
            id: 2,
            to: '/Learner-subjects',
            title: 'subjects',
            icon: <MdOutlineSubject
                size={25}
                className='LearnerNavigation-list-icon' />,
            className:
                activeNav === 'subjects' ?
                    'LearnerNavigation-list-el-active'
                    : 'LearnerNavigation-list-el'

        },
        {
            id: 3,
            to: '/Learner-calendar',
            title: 'calendar',
            icon: <BsCalendar2Range
                size={25}
                className='LearnerNavigation-list-icon' />,
            className:
                activeNav === 'calendar' ?
                    'LearnerNavigation-list-el-active'
                    : 'LearnerNavigation-list-el'

        },
        {
            id: 4,
            to: '/Learner-marks',
            title: 'marks',
            icon: <GiCheckMark
                size={25}
                className='LearnerNavigation-list-icon' />,
            className:
                activeNav === 'marks' ?
                    'LearnerNavigation-list-el-active'
                    : 'LearnerNavigation-list-el'

        },
        {
            id: 5,
            to: '/Learner-messages',
            title: 'messages',
            icon: <SiGooglemessages
                size={25}
                className='LearnerNavigation-list-icon' />,
            className:
                activeNav === 'messages' ?
                    'LearnerNavigation-list-el-active'
                    : 'LearnerNavigation-list-el'

        },
        {
            id: 6,
            to: '/Learner-account',
            title: 'account',
            icon: <MdAccountCircle
                size={25}
                className='LearnerNavigation-list-icon' />,
            className:
                activeNav === 'account' ?
                    'LearnerNavigation-list-el-active'
                    : 'LearnerNavigation-list-el'

        },
    ]

    return (
        <div id='LearnerNavigation'>

            <div className='LearnerNavigation-list-content'>
                {widgetList.map((widget) => (
                    <a key={widget.id} title={widget.title} href={widget.to}>
                        <div className={widget.className}>
                            {widget.icon}
                            <div className='LearnerNavigation-list-label'>
                                {widget.title}
                            </div>
                        </div>
                    </a>
                ))
                }

            </div>

        </div>
    );
}

export default LearnerNavigation;