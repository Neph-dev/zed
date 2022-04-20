import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { useDetectClickOutside } from 'react-detect-click-outside';

//import styling components
import './LearnerHeader.css';

//import icons
import { MdNotifications, MdMoreVert, MdOutlineClose } from 'react-icons/md';
import { HiVideoCamera, HiLogout } from 'react-icons/hi';
import { CgDarkMode } from 'react-icons/cg';

import LearnerNavigation from '../Navigation';


function LearnerHeader({ activeNav }) {

    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)
    const [showMoreDropdown, setShowMoreDropdown] = useState(false)

    const closeNotificationDropdown = () => {
        setShowNotificationDropdown(false);
    }
    const notificationRef = useDetectClickOutside({ onTriggered: closeNotificationDropdown });

    const closeMoreDropdown = () => {
        setShowMoreDropdown(false);
    }
    const moreRef = useDetectClickOutside({ onTriggered: closeMoreDropdown });

    return (
        <div>
            <div id='LearnerHeader'>

                <div className='LearnerHeader-list-container'>
                    <div className='LearnerHeader-logo_notifications' >
                        <div className='LearnerHeader-logo'>
                            <Link to='/'>
                                Zed
                            </Link>
                        </div>
                        <div ref={notificationRef}>
                            <MdNotifications
                                onClick={() => setShowNotificationDropdown(prevState => !prevState)}
                                size={30}
                                className='LearnerHeader-MdNotifications' />
                            {
                                showNotificationDropdown && (
                                    <div className='LearnerHeader-notification-dropdown'>
                                        <div className='LearnerHeader-notification-label_cross'>
                                            <div className='LearnerHeader-notification-label'>
                                                Notifications
                                            </div>
                                            <MdOutlineClose
                                                onClick={() => setShowNotificationDropdown(false)}
                                                size={20}
                                                className='LearnerHeader-notification-close' />
                                        </div>
                                        <div className='LearnerHeader-notification-el'>
                                            <div className='LearnerHeader-notification-title'>
                                                This is a title
                                            </div>
                                            <div className='LearnerHeader-notification-description'>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a
                                                type specimen book. It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged.
                                            </div>
                                            <div className='LearnerHeader-notification-date'>
                                                • 1 hour ago
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className='LearnerHeader-camera_more'>
                        <HiVideoCamera
                            size={30}
                            className='LearnerHeader-HiVideoCamera' />
                        <div ref={moreRef}>
                            <MdMoreVert
                                onClick={() => setShowMoreDropdown(prevState => !prevState)}
                                size={30}
                                className='LearnerHeader-MdMoreVert' />
                            {
                                showMoreDropdown && (
                                    <div className='LearnerHeader-more-dropdown'>
                                        <div className='LearnerHeader-more-drop-el'>
                                            <CgDarkMode
                                                size={25}
                                                style={{ marginRight: 10 }} /> Theme
                                        </div>
                                        <div
                                            style={{ color: 'red' }}
                                            className='LearnerHeader-more-drop-el'>
                                            <HiLogout
                                                size={25}
                                                style={{ marginRight: 10 }} />Log out
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>

            <LearnerNavigation activeNav={activeNav} />
        </div>
    );
}

export default LearnerHeader;