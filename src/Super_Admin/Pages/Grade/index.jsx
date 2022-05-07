import React, { useEffect } from 'react';

import AdminHeader from '../../Components/Header';

import GradeDashboard from '../../Components/GradeDashboard';

function AdminGrade() {

    const activeNav = 'school'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <AdminHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <GradeDashboard />

            </div>

        </div>
    );
}

export default AdminGrade;