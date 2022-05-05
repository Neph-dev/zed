import React, { useState } from 'react';

import { useHistory } from "react-router-dom";

import { BiArrowBack, BiMenu } from 'react-icons/bi';
import DiscussionMenu from '../DiscussionMenu';

import './DiscussionHeader.css';


function DiscussionHeader() {

    const [showMenu, setShowMenu] = useState(false);

    const history = useHistory();

    return (
        <div id='DiscussionHeader'>
            <div className='DiscussionHeader-list-container'>
                <div className='DiscussionHeader-icon_title' >
                    <div >
                        <BiArrowBack
                            onClick={() => history.goBack()}
                            title='back'
                            size={20}
                            className='DiscussionHeader-BiArrowBack' />
                    </div>
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