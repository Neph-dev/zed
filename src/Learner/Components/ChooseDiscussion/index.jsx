import React from 'react';

import { courseList, Principal } from '../../Mock'

import './ChooseDiscussion.css';


function ChooseDiscussion() {

    return (
        <div id='ChDiscussion'>

            <div className='PageTitle'>
                Choose Discussion Group
            </div>

            <div className='cards-list'>
                {
                    Principal.map((principal) => (
                        <a
                            href="/Learner-course-discussion"
                            className='radius-main-card'>
                            <div className='radius-card-top-right'>
                                {principal.newMsg}
                            </div>
                            <div className='radius-card-title'>
                                {principal.title}
                            </div>
                        </a>
                    ))
                }
                {
                    courseList.map((course) => (
                        <a
                            href="/Learner-course-discussion"
                            className='radius-card'>
                            <div className='radius-card-top-right'>
                                {course.newMsg}
                            </div>
                            <div className='radius-card-title'>
                                {course.title}
                            </div>
                            <div className='radius-card-sm-text'>
                                {course.people} Students
                            </div>
                        </a>
                    ))
                }
            </div>

        </div >
    );
}

export default ChooseDiscussion;