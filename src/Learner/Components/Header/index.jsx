import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { useDetectClickOutside } from 'react-detect-click-outside';

//import styling components
import './LearnerHeader.css';

//import icons
import { HiVideoCamera } from 'react-icons/hi';

import LearnerNavigation from '../Navigation';
import Notifications from '../../../Components/Notifications';
import HeaderMenu from '../../../Components/HeaderMenu';


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
                        <div className='Page-top-left-logo'>
                            <Link to='/Learner-dashboard'>
                                Zed
                            </Link>
                        </div>
                        <Notifications
                            notificationRef={notificationRef}
                            setShowNotificationDropdown={setShowNotificationDropdown}
                            showNotificationDropdown={showNotificationDropdown} />
                    </div>

                    <div className='LearnerHeader-camera_more'>
                        <HiVideoCamera
                            size={30}
                            className='LearnerHeader-HiVideoCamera' />
                        <HeaderMenu
                            moreRef={moreRef}
                            setShowMoreDropdown={setShowMoreDropdown}
                            showMoreDropdown={showMoreDropdown} />
                    </div>
                </div>

            </div>

            <LearnerNavigation activeNav={activeNav} />
        </div>
    );
}

export default LearnerHeader;