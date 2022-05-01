import React from 'react';

import { TeacherSubjects } from '../../Mock';

import { BiArrowBack } from 'react-icons/bi';

import './SubjectListComponent.css';


function SubjectListComponent() {
    return (
        <div id='Courses'>
            <div className='Course-back_title'>
                <a href='/Teacher-classes'>
                    <BiArrowBack
                        title='back'
                        size={25}
                        className='Course-BiArrowBack' />
                </a>

                <div className='Course-title'>
                    Grade 9
                </div>
            </div>

            <div className='cards-list'>
                {
                    TeacherSubjects.map((TeacherSubject) => (
                        <a
                            href="/Teacher-subject-dashboard"
                            className='radius-card'>
                            <div className='radius-card-title'>
                                {TeacherSubject.title}
                            </div>
                            <div className='radius-card-sm-text'>
                                {TeacherSubject.numberOfStudents} Students
                            </div>
                        </a>
                    ))
                }

            </div>

        </div>
    );
}

export default SubjectListComponent;