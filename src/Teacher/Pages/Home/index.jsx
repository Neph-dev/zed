import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import Greeting from '../../../Components/Greeting';
import TeacherHeader from '../../Components/Header';


function TeacherHome() {

    const activeNav = 'home'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <Helmet>
                <title>Welcome to Zed</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Teacher-dashboard' />
            </Helmet>

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <Greeting />

            </div>

        </div>
    );
}

export default TeacherHome;