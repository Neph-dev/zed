import React, { useEffect, useState } from 'react';

// Import styling components.
import './Marks.css';
import '../../Components/LearnerPagesCss/LearnerPages.css';

import LearnerHeader from '../../Components/Header';
import MarksComponent from '../../Components/MarksComponent';


function LearnerMarks() {

    const activeNav = 'marks';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='LearnerPages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='learnerPagesContent'>

                <MarksComponent />

            </div>

        </div>
    );
}

export default LearnerMarks;