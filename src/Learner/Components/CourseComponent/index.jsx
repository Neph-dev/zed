import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';
import { TiMessages } from 'react-icons/ti';
import { RiMarkPenFill } from 'react-icons/ri';
import { GiFullFolder } from 'react-icons/gi';

import './CourseComponent.css';


function CourseComponent() {

    const widgetList = [
        {
            id: 0,
            title: 'Materials',
            background: '#966fd6',
            icon: <GiFullFolder size={50} className="radius-card-icon" />,
            to: '/Learner-course-marks',
        },
        {
            id: 1,
            title: 'Discussion',
            background: '#1164b4',
            icon: <TiMessages size={50} className="radius-card-icon" />,
            to: '/Learner-course-discussion',
        },
        {
            id: 2,
            title: 'Marks',
            background: '#6eaea1',
            icon: <RiMarkPenFill size={50} className="radius-card-icon" />,
            to: '/Learner-course-marks',
        },
    ]

    return (
        <div id='Course'>

            <div className='Course-back_title'>
                <a href='/Learner-subjects'>
                    <BiArrowBack
                        title='back'
                        size={25}
                        className='Course-BiArrowBack' />
                </a>

                <div className='Course-title'>
                    Mathmatics
                </div>
            </div>

            <div className='cards-list'>
                {
                    widgetList.map((widget) => (
                        <a href={widget.to}
                            key={widget.id}
                            style={{ background: widget.background }}
                            className='radius-card' >
                            <div className='radius-card-title'>
                                {widget.title}
                            </div>
                            {widget.icon}
                        </a>
                    ))
                }
            </div>

        </div>
    );
}

export default CourseComponent;