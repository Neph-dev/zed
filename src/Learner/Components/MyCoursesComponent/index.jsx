import React from 'react';

import { courseList } from '../../Mock';

import './MyCoursesComponent.css';



function MyCoursesComponent() {

    return (
        <section id='myCourses'>

            <div className='PageCenteredTitle'>
                Subjects
            </div>
            <div className='cards-list'>
                {
                    courseList.map((course) => (
                        <a href='/Learner-course'>
                            <div key={course.id} className='blue-card'>
                                <div className='blue-card-centered-txt'>
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