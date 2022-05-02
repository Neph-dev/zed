import React from 'react';

// react-circular-progressbar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Icons.
import { BiUpArrowAlt, BiDownArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

import { Assignments } from '../../Mock';

import './StudentMarksComponent.css';

import StudentsProfileTabs from '../StudentsProfileTabs';
import Marks from '../../../Components/Marks';


function StudentMarksComponent() {

    let activeTab = 'marks'

    // Calculate the sum of all marks and divide it by the length of all added marks 
    //to find the average mark in percentage.
    let averageMarksPercentage = Assignments.reduce((acc, el) => acc + el.mark, 0) / Assignments.length

    return (
        <div id='Courses'>

            <div className='Course-back_title'>
                <a href='/Teacher-students'>
                    <BiArrowBack
                        title='back'
                        size={25}
                        className='Course-BiArrowBack' />
                </a>
            </div>

            <StudentsProfileTabs activeTab={activeTab} />

            <div className='SM-components-header'>
                <div className='SM-components-header-name'>Soraya Zed</div>
                <AiOutlinePlusCircle
                    size={30}
                    title='Add a new mark'
                    className='AiOutlinePlusCircle' />
            </div>

            <section id='Marks'>
                <Marks marksData={Assignments} />
            </section>

        </div>
    );
}

export default StudentMarksComponent;