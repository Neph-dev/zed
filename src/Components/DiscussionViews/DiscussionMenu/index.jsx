import React from 'react';

import { MdOutlineClose } from 'react-icons/md';

import './DiscussionMenu.css';


function DiscussionMenu({ showMenu, setShowMenu }) {

    return (
        showMenu === true ? (
            <div>
                <div>

                    <div className='DiscussionMenu-dropdown'>

                        <MdOutlineClose
                            onClick={() => setShowMenu(false)}
                            size={20}
                            className='DiscussionMenu-close' />

                    </div>
                </div>
            </div>
        ) : []
    );
}

export default DiscussionMenu;