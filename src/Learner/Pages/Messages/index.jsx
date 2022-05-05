import React, { useEffect, useState } from 'react';

// Import styling components.
import '../../Components/LearnerPagesCss/LearnerPages.css';

import LearnerHeader from '../../Components/Header';
import ChooseDiscussion from '../../Components/ChooseDiscussion';

function LearnerMessages() {

    const activeNav = 'messages';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='LearnerPages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='learnerPagesContent'>

                <ChooseDiscussion />

            </div>
        </div>
    );
}

export default LearnerMessages;