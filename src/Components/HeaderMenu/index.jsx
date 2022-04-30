import React from 'react';

import { MdMoreVert } from 'react-icons/md';
import { CgDarkMode } from 'react-icons/cg';
import { HiLogout } from 'react-icons/hi';

import './HeaderMenu.css';


function HeaderMenu({
    moreRef,
    setShowMoreDropdown,
    showMoreDropdown
}) {
    return (
        <div ref={moreRef}>
            <MdMoreVert
                onClick={() => setShowMoreDropdown(prevState => !prevState)}
                size={30}
                className='MdMoreVert' />
            {
                showMoreDropdown && (
                    <div className='more-dropdown'>
                        <div className='more-drop-el'>
                            <CgDarkMode
                                size={25}
                                style={{ marginRight: 10 }} /> Theme
                        </div>
                        <div
                            style={{ color: 'red' }}
                            className='more-drop-el'>
                            <HiLogout
                                size={25}
                                style={{ marginRight: 10 }} />Log out
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default HeaderMenu;