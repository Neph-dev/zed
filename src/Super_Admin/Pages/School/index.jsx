import React, { useEffect } from 'react';
import AdminGradesList from '../../Components/GradesList';

import AdminHeader from '../../Components/Header';


function AdminSchool() {

    const activeNav = 'school'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="Pages">

            <AdminHeader activeNav={activeNav} />

            <div className="PagesContent">

                <AdminGradesList />

            </div>

        </div>
    );
}

export default AdminSchool;