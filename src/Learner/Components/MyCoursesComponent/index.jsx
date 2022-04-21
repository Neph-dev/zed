import React from 'react';

import { courseList } from '../../Mock';

import './MyCoursesComponent.css';



function MyCoursesComponent() {

    return (
        <section id='myCourses'>

            <div className='myCourses-title'>
                My Courses
            </div>
            <div className='myCourses-cards'>
                {
                    courseList.map((course) => (
                        <a href='/Learner-course'>
                            <div key={course.id} className='myCourses-card'>
                                <div className='myCourses-card-subject'>
                                    {course.title}
                                </div>
                            </div>
                        </a>

                    ))
                }
            </div>

        </section>
    );
}

export default MyCoursesComponent;