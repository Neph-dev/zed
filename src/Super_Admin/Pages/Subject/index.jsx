import React, { useEffect } from 'react';
import AdminSubjectComponent from '../../Components/AdminSubjectComponent';

import AdminHeader from '../../Components/Header';


function AdminSubject() {

    const activeNav = 'school'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <AdminHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <AdminSubjectComponent />

            </div>
        </div>
    );
}

export default AdminSubject;