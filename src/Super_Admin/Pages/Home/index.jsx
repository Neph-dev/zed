import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import AdminHeader from '../../Components/Header';


function AdminHome() {

    const activeNav = 'home'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="Pages">

            <Helmet>
                <title>Welcome to Zed</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Admin-dashboard' />
            </Helmet>

            <AdminHeader activeNav={activeNav} />

            <div className="PagesContent">

            </div>

        </div>
    );
}

export default AdminHome;