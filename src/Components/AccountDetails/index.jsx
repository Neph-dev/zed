import React from 'react';

import { courseList } from '../../Learner/Mock';

import './AccountDetails.css';


function AccountDetails() {
    return (
        <div id='AccountDetails'>

            <div className='AccountDetails-header-container'>

                <div className='AccountDetails-header-img'>
                    <img
                        src={'https://i.postimg.cc/wTGbWd1B/pexels-pixabay-415829.jpg'}
                        alt='' />
                </div>

                <div>
                    <div className='AccountDetails-header-name' >
                        Soraya Zed
                    </div>
                    <a
                        href="mailto:snephthali@gmail.com"
                        className='AccountDetails-header-email'>
                        sorayazed@gmail.com
                    </a>
                </div>
            </div>

            <ul className="AccountDetails-elments">
                <li><b>Grade:</b> 9</li>
                <li>
                    <b>Subjects:</b> {
                        courseList.map((course) => (
                            <span key={course.id}>{course.title}, </span>
                        ))
                    }
                </li>
            </ul>

            <div className="AccountDetails-title">
                Contact Information
            </div>

            <ul className="AccountDetails-elments">
                <li><b>Guardian's name:</b> Sarah Zed</li>
                <li><b>Relationship:</b> Mother</li>
                <li><b>Phone number:</b>
                    <a href="tel:+27677919267">
                        +27 67 791 9267
                    </a>
                </li>
                <li><b>Email address:</b>
                    <a href="mailto:snephthali@gmail.com">
                        sarahzed@gmail.com
                    </a>
                </li>
                <li>
                    <b>Address:</b> 1st republic road, Johannesburg, 2181, South Africa
                </li>
            </ul>

        </div>
    );
}

export default AccountDetails;