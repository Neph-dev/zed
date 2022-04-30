import React from 'react';

import { MdNotifications, MdOutlineClose } from 'react-icons/md'

import './Notifications.css';


function Notifications({
    notificationRef,
    setShowNotificationDropdown,
    showNotificationDropdown
}) {
    return (
        <div ref={notificationRef}>
            <MdNotifications
                onClick={() => setShowNotificationDropdown(prevState => !prevState)}
                size={30}
                className='MdNotifications' />
            {
                showNotificationDropdown && (
                    <div className='notification-dropdown'>
                        <div className='notification-label_cross'>
                            <div className='notification-label'>
                                Notifications
                            </div>
                            <MdOutlineClose
                                onClick={() => setShowNotificationDropdown(false)}
                                size={20}
                                className='notification-close' />
                        </div>
                        <div className='notification-el'>
                            <div className='notification-title'>
                                This is a title
                            </div>
                            <div className='notification-description'>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining
                                essentially unchanged.
                            </div>
                            <div className='notification-date'>
                                • 1 hour ago
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Notifications;