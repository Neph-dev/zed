import React from 'react';

//Icons
import { BiArrowBack } from 'react-icons/bi';
import { TiMessages } from 'react-icons/ti';
import { RiMarkPenFill } from 'react-icons/ri';
import { GiFullFolder, GiTeacher } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { IoIosFiling } from 'react-icons/io'; //SiFiles


function AdminSubjectComponent() {

    const mainWidgetList = [
        {
            id: 0,
            title: 'Teachers',
            icon: <GiTeacher size={50} className="radius-card-icon" />,
            number: '1 teacher',
            to: '/Admin-teacher',
        },
        {
            id: 1,
            title: 'Students',
            icon: <SiGoogleclassroom size={50} className="radius-card-icon" />,
            number: '50 Students',
            to: '/Admin-students',
        },
    ]
    const widgetList = [
        {
            id: 0,
            title: 'Students',
            background: '#3b3c36',
            icon: <SiGoogleclassroom size={50} className="radius-card-icon" />,
            to: '/Teacher-students',
        },
        {
            id: 1,
            title: 'Discussion',
            background: '#5072a7',
            icon: <TiMessages size={50} className="radius-card-icon" />,
            to: '/Teacher-discussion',
        },
        {
            id: 2,
            title: 'Materials',
            background: '#966fd6',
            icon: <GiFullFolder size={50} className="radius-card-icon" />,
            to: '/Teacher-materials',
        },
        {
            id: 3,
            title: 'Marks',
            background: '#6eaea1',
            icon: <RiMarkPenFill size={50} className="radius-card-icon" />,
            to: '/Learner-course-marks',
        },
        {
            id: 4,
            title: 'Assignments',
            background: '#a4c639',
            icon: <IoIosFiling size={50} className="radius-card-icon" />,
            to: '/Teacher-assignments',
        },
    ]

    return (
        <div id='Courses'>

            <div className='Course-back_title'>
                <a href='/Admin-grade'>
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
                    mainWidgetList.map((widget) => (
                        <a href={widget.to}
                            key={widget.id}
                            style={{ background: widget.background }}
                            className='radius-main-card' >

                            <div className='radius-card-title'>
                                {widget.title}
                            </div>
                            <div className='radius-card-sm-text'>
                                {widget.number}
                            </div>

                            {widget.icon}
                        </a>
                    ))
                }
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

export default AdminSubjectComponent;