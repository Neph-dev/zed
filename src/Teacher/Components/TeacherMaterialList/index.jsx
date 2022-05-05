import React, { useState } from 'react';

import {
    AiOutlineSearch,
    AiTwotoneFilePdf,
    AiFillFileUnknown,
    AiOutlinePlusCircle,
    AiOutlineCloseCircle
} from 'react-icons/ai';
import { BiArrowBack, BiQuestionMark } from 'react-icons/bi';
import { FaFileVideo } from 'react-icons/fa';
import ConfirmDelete from '../../../Components/ConfirmDelete';

import { Materials } from '../../Mock';

import './TeacherMaterials.css';


function TeacherMaterialList() {

    const [deleting, setDeleting] = useState(false)

    const [materialList, setMaterialList] = useState(Materials)
    const [materialFilterData, setMaterialFilterData] = useState(Materials)
    const [searchMaterialByName, setSearchMaterialByName] = useState('')

    const searchStudentsByNameFilter = (text) => {
        if (text) {
            const newData = materialList.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            });
            setMaterialFilterData(newData)
            setSearchMaterialByName(text)
        } else {
            setMaterialFilterData(materialList)
            setSearchMaterialByName(text)
        }
    }

    return (
        <div id='Courses'>

            <div className='Course-back_title'>
                <a href='/Teacher-subject-dashboard'>
                    <BiArrowBack
                        title='back'
                        size={25}
                        className='Course-BiArrowBack' />
                </a>
                <div className='Course-title'>
                    Mathmatics Materials
                </div>
            </div>

            <div className='search-container'>
                <AiOutlineSearch size={25} className='AiOutlineSearch' />
                <input
                    type='search'
                    className='search'
                    placeholder='Search by name'
                    onChange={(e) => searchStudentsByNameFilter(e.target.value)}
                    value={searchMaterialByName}
                    autoFocus={true} />
            </div>

            <div className='AiOutlinePlusCircle-container'>
                <AiOutlinePlusCircle
                    size={30}
                    title='Add a new mark'
                    className='AiOutlinePlusCircle' />
            </div>

            <div className='cards-list'>
                {
                    materialFilterData.map((material) => (
                        <div
                            key={material.id}
                            className='radius-card'
                            title={material.title} >

                            <AiOutlineCloseCircle
                                onClick={() => setDeleting(true)}
                                className='radius-card-delete-icon'
                                title='delete'
                                size={18} />

                            <a href='Teacher-materials'>

                                <div className='radius-card-title'>
                                    {material.title}
                                </div>

                                <div style={{ marginTop: '.5rem' }} className='radius-card-sm-text'>
                                    Last update: {material.lastUpdate}
                                </div>

                                {
                                    material.type === 'file' ?
                                        <AiTwotoneFilePdf size={50} className='radius-card-icon' />
                                        : material.type === 'video' ?
                                            <FaFileVideo size={50} className='radius-card-icon' />
                                            : <AiFillFileUnknown size={50} className='radius-card-icon' />

                                }

                            </a>
                        </div>
                    ))
                }
            </div>

            {
                deleting && (
                    <ConfirmDelete setDeleting={setDeleting} />
                )
            }

        </div >
    );
}

export default TeacherMaterialList;