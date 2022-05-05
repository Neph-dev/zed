import React from 'react';

import DiscussionHeader from '../../../Components/DiscussionViews/DiscussionHeader';
import DiscussionBody from '../../../Components/DiscussionViews/DiscussionBody';
import DimensionMessageArea from '../../../Components/DiscussionViews/DimensionMessageArea';


function TeacherDiscussion() {
    return (
        <div id='Discussion'>

            <DiscussionHeader />
            <DiscussionBody />
            <DimensionMessageArea />

        </div>
    );
}

export default TeacherDiscussion;