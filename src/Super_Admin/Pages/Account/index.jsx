import React, { useEffect } from 'react';

import AdminHeader from '../../Components/Header';


function AdminAccount() {

    const activeNav = 'account'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <AdminHeader activeNav={activeNav} />

            <div className="PagesContent">

            </div>

        </div>
    );
}

export default AdminAccount;