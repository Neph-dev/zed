import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

// Import styling components.
import './LearnerCalendar.css';
import '../../Components/LearnerPagesCss/LearnerPages.css';

import LearnerHeader from '../../Components/Header';
import Day from '../../Components/CalendarViews/Day';


function LearnerCalendar() {

    const activeNav = 'calendar'

    return (
        <div id='LearnerPages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='learnerPagesContent'>

                <Day />

            </div>
        </div>
    );
}

export default LearnerCalendar;