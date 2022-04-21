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

                        <div className='ChDiscussion-card-direction'>
                            <div className='ChDiscussion-card-number'>
                                {principal.newMsg}
                            </div>
                            <div className='ChDiscussion-card-title'>
                                {principal.title}
                            </div>
                        </div>
                    ))
                }
                {
                    courseList.map((course) => (

                        <div className='ChDiscussion-card'>
                            <div className='ChDiscussion-card-number'>
                                {course.newMsg}
                            </div>
                            <div className='ChDiscussion-card-title'>
                                {course.title}
                            </div>
                            <div className='ChDiscussion-card-people'>
                                {course.people} people
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default ChooseDiscussion;