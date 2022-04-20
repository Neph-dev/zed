import React from 'react';

import './MyCoursesComponent.css';



function MyCoursesComponent() {
    return (
        <section id='myCourses'>

            <div className='myCourses-title'>
                My Courses
            </div>
            <div className='myCourses-cards'>
                <div className='myCourses-card'>
                    <div className='myCourses-card-subject'>
                        Mathmatics
                    </div>
                </div>
                <div className='myCourses-card'>
                    <div className='myCourses-card-subject'>
                        Physics
                    </div>
                </div>
                <div className='myCourses-card'>
                    <div className='myCourses-card-subject'>
                        French
                    </div>
                </div>
                <div className='myCourses-card'>
                    <div className='myCourses-card-subject'>
                        Chemestry
                    </div>
                </div>
                <div className='myCourses-card'>
                    <div className='myCourses-card-subject'>
                        Sport
                    </div>
                </div>
                <div className='myCourses-card'>
                    <div className='myCourses-card-subject'>
                        English
                    </div>
                </div>
            </div>

        </section>
    );
}

export default MyCoursesComponent;