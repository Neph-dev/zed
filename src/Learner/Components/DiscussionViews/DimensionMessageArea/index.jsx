import React from 'react';

// Icons
import { RiSendPlaneFill } from 'react-icons/ri';
import { MdAttachFile } from 'react-icons/md';

import './DimensionMessageArea.css';

import TextareaAutosize from 'react-textarea-autosize';


function DimensionMessageArea() {
    return (
        <div id='DimensionMessageArea'>
            <div className='textArea-container'>
                <MdAttachFile size={35} className='send-icon' />
                <TextareaAutosize
                    placeholder='Write a message...'
                    className='class-discussion-text-area'
                    autoFocus={true} />
                <RiSendPlaneFill size={35} className='send-icon' />
            </div>
        </div>
    );
}

export default DimensionMessageArea;