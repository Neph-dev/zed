import React, { useState } from 'react';

import { BiArrowBack, BiMenu } from 'react-icons/bi';
import DiscussionMenu from '../DiscussionMenu';

import './DiscussionHeader.css';


function DiscussionHeader() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div id='DiscussionHeader'>
            <div className='DiscussionHeader-list-container'>
                <div className='DiscussionHeader-icon_title' >
                    <a href='/Learner-course'>
                        <BiArrowBack
                            title='back'
                            size={20}
                            className='DiscussionHeader-BiArrowBack' />
                    </a>
                    <div className='DiscussionHeader-group-title'>
                        Mathmatics
                    </div>
                </div>

                <BiMenu
                    onClick={() => setShowMenu(prevState => !prevState)}
                    size={30}
                    className='BiMenu-DiscussionHeader' />
            </div>
            <DiscussionMenu
                showMenu={showMenu}
                setShowMenu={setShowMenu} />
        </div>
    );
}

export default DiscussionHeader;