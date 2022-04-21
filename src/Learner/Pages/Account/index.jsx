import React, { useEffect, useState } from 'react';

// Import styling components.
import '../../Components/LearnerPagesCss/LearnerPages.css';

import AccountForm from '../../Components/AccountForm';
import LearnerHeader from '../../Components/Header';


function LearnerAccount() {

    const activeNav = 'account';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='LearnerPages'>

            <LearnerHeader activeNav={activeNav} />

            <div className='learnerPagesContent'>

                <AccountForm />

            </div>
        </div>
    );
}

export default LearnerAccount;