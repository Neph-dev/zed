import React, { useEffect } from 'react';
import AccountDetails from '../../../Components/AccountDetails';

import TeacherHeader from '../../Components/Header';


function TeacherAccount() {

    const activeNav = 'account'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="Pages">

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <AccountDetails />

            </div>

        </div>
    );
}

export default TeacherAccount;