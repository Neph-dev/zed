import React, { useEffect, useState } from 'react';

import { courseList, Principal } from '../../../Mock'

import './ChooseDiscussion.css';


function ChooseDiscussion() {

    return (
        <div id='ChDiscussion'>

            <div className='ChDiscussion-title'>
                Choose Discussion Group
            </div>

            <div className='ChDiscussion-cards'>
                {
                    Principal.map((principal) => (
                        <a
                            href="/Learner-course-discussion"
                            className='ChDiscussion-card-direction'>
                            <div className='ChDiscussion-card-number'>
                                {principal.newMsg}
                            </div>
                            <div className='ChDiscussion-card-title'>
                                {principal.title}
                            </div>
                        </a>
                    ))
                }
                {
                    courseList.map((course) => (
                        <a
                            href="/Learner-course-discussion"
                            className='ChDiscussion-card'>
                            <div className='ChDiscussion-card-number'>
                                {course.newMsg}
                            </div>
                            <div className='ChDiscussion-card-title'>
                                {course.title}
                            </div>
                            <div className='ChDiscussion-card-people'>
                                {course.people} people
                            </div>
                        </a>
                    ))
                }
            </div>

        </div>
    );
}

export default ChooseDiscussion;