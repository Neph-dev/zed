import React from 'react';

import { TeacherSubjects } from '../../Mock'

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { SiGoogleclassroom } from 'react-icons/si';
import { GiTeacher } from 'react-icons/gi';


function GradeDashboard() {

    const widgetList = [
        {
            id: 0,
            title: 'Teachers',
            icon: <GiTeacher size={50} className="radius-card-icon" />,
            number: '4 teachers',
            to: '/Admin-discussion',
        },
        {
            id: 1,
            title: 'Students',
            icon: <SiGoogleclassroom size={50} className="radius-card-icon" />,
            number: '50 Students',
            to: '/Admin-students',
        },
    ]

    return (
        <div id='Courses'>

            <div className='Course-back_title'>
                <a href='/Admin-school'>
                    <BiArrowBack
                        title='back'
                        size={25}
                        className='Course-BiArrowBack' />
                </a>
                <div className='Course-title'>
                    Grade 5
                </div>
            </div>

            <div className='cards-list'>
                {
                    widgetList.map((widget) => (
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

            <div className='PageCenteredTitle'>
                Subjects
            </div>

            <AiOutlinePlusCircle
                size={30}
                title='Add a new subject.'
                className='GL-AiOutlinePlusCircle' />

            <div className='cards-list'>
                {
                    TeacherSubjects.map((subject) => (
                        <a href='Admin-subject' key={subject.id} className='radius-card'>
                            <div className='radius-card-title'>
                                {subject.title}
                            </div>
                            <div className='radius-card-sm-text'>
                                {subject.numberOfStudents} students
                            </div>
                        </a>
                    ))

                }
            </div>
        </div>
    );
}

export default GradeDashboard;