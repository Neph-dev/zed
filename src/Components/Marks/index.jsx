import React from 'react';

// react-circular-progressbar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Icons.
import { BiUpArrowAlt, BiDownArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';

import './Marks.css';


function Marks({ marksData }) {

    // Calculate the sum of all marks and divide it by the length of all added marks 
    //to find the average mark in percentage.
    let averageMarksPercentage = marksData.reduce((acc, el) => acc + el.mark, 0) / marksData.length


    return (

        <div className='Marks-subject_average'>
            <div>
                {
                    marksData.map((mark) => (
                        <div className='Marks-subject-container'>
                            <div className='Marks-subject-title'>
                                {mark.title}
                            </div>
                            <div className='Marks-subject-mark'>
                                {mark.mark}% <BiUpArrowAlt
                                    title='Mark on up trend since the last update.'
                                    size={20}
                                    className='Marks-BiUpArrowAlt' />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                {/* Circular progress bar showing total average marks */}
                <div title={`${averageMarksPercentage.toFixed(1)}% / 100%`}>
                    <CircularProgressbar
                        value={averageMarksPercentage}
                        text={` ${averageMarksPercentage.toFixed(1)} %`}
                        maxValue={100}
                        minValue={0}
                        className='Marks-circular-progressbar'
                        styles={
                            buildStyles({
                                rotation: 1,
                                strokeLinecap: 'round',
                                pathTransitionDuration: 1,
                                textColor: averageMarksPercentage.toFixed(1) <= 49.9 ? '#f88' : 'green',
                                trailColor: '#d6d6d6',
                                pathColor: averageMarksPercentage.toFixed(1) <= 49.9 ?
                                    `rgba(255, 0, 0, ${averageMarksPercentage / 100})`
                                    :
                                    `rgba(0, 128, 0, ${averageMarksPercentage / 100})`
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Marks;