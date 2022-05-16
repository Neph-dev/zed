import React, { useState } from 'react';

import { useHistory } from "react-router-dom";

import { FileUploader } from "react-drag-drop-files";

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { GoFileDirectory } from 'react-icons/go';


function AssignmentsListFolder() {

    const history = useHistory();

    const fileTypes = ["JPEG", "PNG", "GIF", "PDF"];
    const [file, setFile] = useState();

    const [deleting, setDeleting] = useState(false)

    return (
        <div id='Courses'>

            <div className='back_title'>
                <div>
                    <BiArrowBack
                        onClick={() => history.goBack()}
                        title='back'
                        size={25}
                        className='GoBackIcon' />
                </div>
                <div className='Course-title'>
                    Assignments
                </div>
            </div>

            <div>
                <div className='PageCenteredTitle'>
                    Upload
                </div>
                <div className='fileUploader'>
                    <div style={{ marginTop: '2rem' }}>
                        <FileUploader
                            multiple={true}
                            handleChange={() => { }}
                            name="file"
                            types={fileTypes}
                            className='FileUploader'
                        />
                        <p className='fileUploader-label'>
                            {file ? `File name: ${file[0].name}` : "no files uploaded yet"}
                        </p>
                    </div>
                </div>
            </div>

            <div className='cards-list'>

                <div className='radius-main-card'>
                    <AiOutlineCloseCircle
                        onClick={() => setDeleting(true)}
                        className='radius-card-delete-icon'
                        title='delete'
                        size={18} />
                    <div className='radius-card-title'>
                        Assignment 1
                    </div>

                    <div style={{ marginTop: '.5rem' }} className='radius-card-sm-text'>
                        Last update: 5/05/2022
                    </div>
                    <div style={{ marginTop: '.5rem' }} className='radius-card-sm-text'>
                        Due Date: 25/05/2022
                    </div>
                </div>

                <div className='radius-card'>
                    <div className='radius-card-name-surname'>
                        Name And Surname
                    </div>
                    <div style={{ marginTop: '.5rem' }} className='radius-card-sm-text'>
                        Last update: 5/05/2022
                    </div>
                    <input
                        placeholder='000'
                        maxLength={3}
                        className='radius-card-mark' />

                    <button className='radius-card-mark-btn'>
                        Mark
                    </button>
                </div>

                <div className='radius-card'>
                    <div className='radius-card-name-surname'>
                        Name And Surname
                    </div>
                    <div style={{ marginTop: '.5rem' }} className='radius-card-sm-text'>
                        Last update: 5/05/2022
                    </div>
                    <input
                        placeholder='000'
                        maxLength={3}
                        className='radius-card-mark' />

                    <button className='radius-card-mark-btn'>
                        Mark
                    </button>
                </div>

                <div className='radius-card'>
                    <div className='radius-card-name-surname'>
                        Name And Surname
                    </div>
                    <div style={{ marginTop: '.5rem' }} className='radius-card-sm-text'>
                        Last update: 5/05/2022
                    </div>
                    <input
                        placeholder='000'
                        maxLength={3}
                        className='radius-card-mark' />

                    <button className='radius-card-mark-btn'>
                        Mark
                    </button>
                </div>

            </div>

        </div>
    );
}

export default AssignmentsListFolder;