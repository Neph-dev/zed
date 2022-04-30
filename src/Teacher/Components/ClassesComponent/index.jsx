import React from 'react';

import { teacherClasses } from '../../Mock';

import './ClassesComponent.css';


function ClassesComponent() {
    return (
        <section id='myCourses'>

            <div className='myCourses-title'>
                My Classes
            </div>
            <div className='cards-list'>
                {
                    teacherClasses.map((teacherClasse) => (
                        <a href='/Teacher-subjects'>
                            <div key={teacherClasse.id} className='blue-card '>
                                <div className='blue-card-centered-txt'>
                                    {teacherClasse.value}
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>

        </section>
    );
}

export default ClassesComponent;