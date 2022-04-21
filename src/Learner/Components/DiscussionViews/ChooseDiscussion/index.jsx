import React, { useEffect, useState } from 'react';

import './ChooseDiscussion.css';


function ChooseDiscussion() {

    const groupDiscussion = [
        {
            title: 'Mathmatics',
            people: 50,
            newMsg: 33
        },
        {
            title: 'Principal',
            newMsg: 1
        },
        {
            title: 'Physics',
            people: 50,
            newMsg: 500
        },
        {
            title: 'French',
            people: 50,
            newMsg: 0
        },
        {
            title: 'English',
            people: 50,
            newMsg: 33
        },
    ]

    return (
        <div id='ChDiscussion'>

            <div className='ChDiscussion-title'>
                Choose Discussion Group
            </div>

            <div className='ChDiscussion-cards'>
                {
                    groupDiscussion.map((group) => (

                        group.title == "Principal" ?

                            <div className='ChDiscussion-card-direction'>
                                <div className='ChDiscussion-card-number'>
                                    {group.newMsg}
                                </div>
                                <div className='ChDiscussion-card-title'>
                                    {group.title}
                                </div>
                            </div>
                            :
                            <div className='ChDiscussion-card'>
                                <div className='ChDiscussion-card-number'>
                                    {group.newMsg}
                                </div>
                                <div className='ChDiscussion-card-title'>
                                    {group.title}
                                </div>
                                <div className='ChDiscussion-card-people'>
                                    {group.people} people
                                </div>
                            </div>
                    ))
                }
            </div>

        </div>
    );
}

export default ChooseDiscussion;