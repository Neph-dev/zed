import React from 'react';

import { useHistory } from "react-router-dom";

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { GoFileDirectory } from 'react-icons/go';

import './AssignFolders.css';


function AssignmentFolders() {

    const history = useHistory();

    return (
        <div id='Courses'>

            <div className='Course-back_title'>
                <div>
                    <BiArrowBack
                        onClick={() => history.goBack()}
                        title='back'
                        size={25}
                        className='Course-BiArrowBack' />
                </div>
                <div className='Course-title'>
                    Assignment Folders
                </div>
            </div>

            <AiOutlinePlusCircle
                size={30}
                title='Add a new folder'
                className='AF-AiOutlinePlusCircle' />

            <div className='cards-list'>
                <a href='/Teacher-assignment-folder' className='AF-folderIcon_Name'>
                    <GoFileDirectory
                        size={55}
                        className='AF-GoFileDirectory' />
                    <div className='AF-folderName'>Folder name</div>
                </a>
            </div>


        </div>
    );
}

export default AssignmentFolders;