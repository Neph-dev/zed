import React from 'react';

import './DiscussionBody.css';


function DiscussionBody() {
    return (
        <div id="DiscussionBody">
            <div className='chat-bubles'>

                <div className='sender'>
                    <div>
                        <div style={{ marginRight: '1rem', fontSize: '13px', color: '#000' }}>
                            Anne Hathaway
                        </div>
                        <div className='sender-message'>
                            Hey
                        </div>
                        <div style={{ marginRight: '1rem', fontSize: '13px', color: '#cccccc' }}>
                            11:09
                        </div>
                    </div>
                    <div className='sender-profile' />
                </div>

                <div className='receiver'>
                    <div className='receiver-profile' />
                    <div>
                        <div style={{ marginLeft: '1rem', fontSize: '13px', color: '#000' }}>
                            Jennifer Aniston
                        </div>
                        <div className='receiver-message'>
                            Hey eveyone
                        </div>
                        <div style={{ marginLeft: '1rem', fontSize: '13px', color: '#cccccc' }}>
                            16:09
                        </div>
                    </div>
                </div>

                <div className='main'>
                    <div className='main-profile' />
                    <div>
                        <div style={{ marginLeft: '1rem', fontSize: '13px', color: '#000' }}>
                            Miss Abigail
                        </div>
                        <div className='main-message'>
                            Hey eveyone
                        </div>
                        <div style={{ marginLeft: '1rem', fontSize: '13px', color: '#cccccc' }}>
                            16:09
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscussionBody;