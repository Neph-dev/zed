import React from 'react';

import { courseList } from '../../Mock';

import './MarksComponent.css';

import Marks from '../../../Components/Marks';


function MarksComponent() {

    // Calculate the sum of all marks and divide it by the length of all added marks 
    //to find the average mark in percentage.
    let averageMarksPercentage = courseList.reduce((acc, el) => acc + el.mark, 0) / courseList.length


    return (
        <section id='Marks'>

            <div className='Marks-title'>
                Marks
            </div>

            <Marks marksData={courseList} />

        </section>
    );
}

export default MarksComponent;