import React from 'react';

import { BsFillFileEarmarkFill } from 'react-icons/bs';

import './AssignmentsList.css';


function AssignmentsList() {
    return (
        <div id='AssignmentsList'>

            <div className='AssignmentsList-cards'>

                <div className='AssignmentsList-card-container'>
                    <div>
                        <div className='AssignmentsList-firstDoc'>
                            <div>
                                <div className='AssignmentsList-firstDoc-title'>
                                    Assignment Title
                                </div>
                                <div className='AssignmentsList-firstDoc-Details'>
                                    <BsFillFileEarmarkFill color='#ffffff' size={40} />
                                    <div className='AssignmentsList-firstDoc-Details-el'>
                                        <div>Document Name</div>
                                        <div>Uploaded: </div>
                                        <div>Due date:</div>
                                    </div>

                                    <div className='AssignmentsList-firstDoc-btns'>
                                        <button>Request</button>
                                        {/* <button style={{ color: 'red' }}>Delete</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='AssignmentsList-firstDoc'>
                            <div>
                                <div className='AssignmentsList-firstDoc-title'>
                                    Last uploaded file from Zed
                                </div>
                                <div className='AssignmentsList-firstDoc-Details'>
                                    <BsFillFileEarmarkFill color='#ffffff' size={40} />
                                    <div className='AssignmentsList-firstDoc-Details-el'>
                                        <div>Document Name</div>
                                        <div>Uploaded: </div>
                                        <div>Mark:</div>
                                    </div>
                                    <div className='AssignmentsList-firstDoc-btns'>
                                        <button>Mark</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AssignmentsList;