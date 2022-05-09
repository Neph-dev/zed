import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

import { Students } from '../../Mock';

import './TeacherStudentsComponents.css';


function TeacherStudentsComponents() {

    const [studentList, setStudentList] = useState(Students)
    const [studentFilterData, setStudentFilterData] = useState(Students)
    const [searchStudentByName, setSearchStudentByName] = useState('')

    const searchStudentsByNameFilter = (text) => {
        if (text) {
            const newData = studentList.filter((item) => {
                const itemData = item.fullName ? item.fullName.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            });
            setStudentFilterData(newData)
            setSearchStudentByName(text)
        } else {
            setStudentFilterData(studentList)
            setSearchStudentByName(text)
        }
    }

    return (
        <div id='Courses'>

            <div className='Course-back_title'>
                <a href='/Teacher-subject-dashboard'>
                    <BiArrowBack
                        title='back'
                        size={25}
                        className='Page-back-btn' />
                </a>

                <div className='Course-title'>
                    Students In Mathmatics Grade 9
                </div>
            </div>

            <div className='search-container'>
                <AiOutlineSearch size={25} className='AiOutlineSearch' />
                <input
                    type='search'
                    className='search'
                    placeholder='Search by name'
                    onChange={(e) => searchStudentsByNameFilter(e.target.value)}
                    value={searchStudentByName}
                    autoFocus={true} />
            </div>

            <div className='cards-list'>
                {
                    studentFilterData.map((student) => (
                        <a
                            key={student.id}
                            href='Teacher-student-profile'
                            className='radius-card' >
                            <div className='radius-card-img' />
                            <div className='radius-card-name'>
                                {student.fullName}
                            </div>
                        </a>
                    ))
                }
            </div>

        </div >
    );
}

export default TeacherStudentsComponents;