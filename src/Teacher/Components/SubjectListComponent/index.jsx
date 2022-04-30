import React from 'react';

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

        </div>
    );
}

export default SubjectListComponent;