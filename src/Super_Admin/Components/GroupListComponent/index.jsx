import React from 'react';

import { useHistory } from "react-router-dom";

import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';


function GroupListComponent(
    {
        searchByNameFilter,
        searchByName,
        filterData }) {

    const history = useHistory();

    return (
        <div id='Courses'>

            <div className='Course-back_title'>
                <div>
                    <BiArrowBack
                        onClick={() => history.goBack()}
                        title='back'
                        size={25}
                        className='Page-back-btn' />
                </div>
            </div>

            <div className='search-container'>
                <AiOutlineSearch size={25} className='AiOutlineSearch' />
                <input
                    type='search'
                    className='search'
                    placeholder='Search by name'
                    onChange={(e) => searchByNameFilter(e.target.value)}
                    value={searchByName}
                    autoFocus={true} />
            </div>

            <div className='cards-list'>
                {
                    filterData.map((data) => (
                        <a
                            href='Teacher-student-profile'
                            className='radius-card' >
                            <div className='radius-card-img' />
                            <div className='radius-card-name'>
                                {data.fullName}
                            </div>
                        </a>
                    ))
                }
            </div>

        </div>
    );
}

export default GroupListComponent;