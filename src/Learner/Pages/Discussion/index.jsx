import React from 'react';

import './LearnerDiscussion.css';

import DiscussionHeader from '../../Components/DiscussionViews/DiscussionHeader';
import DiscussionBody from '../../Components/DiscussionViews/DiscussionBody';
import DimensionMessageArea from '../../Components/DiscussionViews/DimensionMessageArea';


function LearnerDiscussion() {
    return (
        <div id='LearnerDiscussion'>

            <DiscussionHeader />
            <DiscussionBody />
            <DimensionMessageArea />

        </div>
    );
}

export default LearnerDiscussion;