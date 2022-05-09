import React from 'react';

import { Link } from 'react-router-dom';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

import './LoginAs.css';


function LoginAs() {

    const widgetList = [
        {
            id: 1,
            to: '/Admin-dashboard',
            title: 'Login as admin',
            icon: <MdAdminPanelSettings
                size={55}
                className="loginAs-admin-icon" />
        },
        {
            id: 2,
            to: '/Teacher-dashboard',
            title: 'Login as teacher',
            icon: <FaChalkboardTeacher
                size={55}
                className="loginAs-admin-icon" />
        },
        {
            id: 3,
            to: '/Learner-dashboard',
            title: 'Login as student',
            icon: <FaUserGraduate
                size={55}
                className="loginAs-admin-icon" />
        },
    ]

    return (
        <div id='Pages'>

            <div className='PageTitle'>
                Login to your profile
            </div>
            {/* <div className='LoginAs-text'>
                Please choose your category and login to your account.
            </div> */}

            <div className='loginAs-cardList'>
                {widgetList.map((widget) => (
                    <a
                        href={widget.to}
                        className='loginAs-card'>

                        <div className='loginAs-card-centered-txt'>
                            {widget.title}
                        </div>

                        {widget.icon}

                        <div className='loginAs-card-arrow-container'>
                            <div className='loginAs-card-arrow-content'>
                                <AiOutlineArrowRight
                                    size={35}
                                    className='loginAs-card-arrow' />
                            </div>
                        </div>
                    </a>
                ))
                }
            </div>

        </div>
    );
}

export default LoginAs;