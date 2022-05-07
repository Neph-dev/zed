import React from 'react';

import { gradeList } from '../../Mock';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './gradesList.css';


function AdminGradesList() {
    return (
        <div>

            <div className='PageCenteredTitle'>
                Grades
            </div>

            <AiOutlinePlusCircle
                size={30}
                title='Add a new mark'
                className='GL-AiOutlinePlusCircle' />

            <div className='cards-list'>
                {
                    gradeList.map((grade) => (
                        <a key={grade.id} href='/Admin-grade'>
                            <div className='blue-card'>
                                <div className='blue-card-centered-txt'>
                                    {grade.title}
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>

        </div>
    );
}

export default AdminGradesList;