import React, { useEffect } from 'react';

import AdminHeader from '../../Components/Header';


function AdminGradeStudents() {

    const activeNav = 'school'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <AdminHeader activeNav={activeNav} />

            <div className='PagesContent'>

            </div>
        </div>
    );
}

export default AdminGradeStudents;