import React from 'react';

import './StudentsProfileTabs.css';


function StudentsProfileTabs({ activeTab }) {

    const tabElements = [
        {
            id: 0,
            title: 'Profile',
            to: '/Teacher-student-profile',
            className: activeTab === 'profile'
                ? 'SP-list-el-active'
                : 'SP-list-el'
        },
        {
            id: 1,
            title: 'Marks',
            to: '/Teacher-student-marks',
            className: activeTab === 'marks'
                ? 'SP-list-el-active'
                : 'SP-list-el'
        },
        {
            id: 2,
            title: 'Assignments',
            to: '/Teacher-student-assignments',
            className: activeTab === 'assignments'
                ? 'SP-list-el-active'
                : 'SP-list-el'
        },
    ]

    return (
        <div>

            <ul className='SP-list-container'>
                {
                    tabElements.map((tabElement) => (
                        <a
                            key={tabElement.id}
                            className={tabElement.className}
                            href={tabElement.to} >
                            <li>
                                {tabElement.title}
                            </li>
                        </a>
                    ))
                }
            </ul>

        </div>
    );
}

export default StudentsProfileTabs;