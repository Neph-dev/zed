import React, { useEffect, useState } from 'react';

import { Teachers } from '../../Mock';

import GroupListComponent from '../../Components/GroupListComponent';
import AdminHeader from '../../Components/Header';

function AdminGradeTeachers() {

    const activeNav = 'school'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [teacherList, setTeacherList] = useState(Teachers)
    const [teacherFilterData, setTeacherFilterData] = useState(Teachers)
    const [searchTeacherByName, setSearchTeacherByName] = useState('')

    const searchTeacherByNameFilter = (text) => {
        if (text) {
            const newData = teacherList.filter((item) => {
                const itemData = item.fullName ? item.fullName.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            });
            setTeacherFilterData(newData)
            setSearchTeacherByName(text)
        } else {
            setTeacherFilterData(teacherList)
            setSearchTeacherByName(text)
        }
    }

    return (
        <div id='Pages'>

            <AdminHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <GroupListComponent
                    searchByName={searchTeacherByName}
                    filterData={teacherFilterData}
                    searchByNameFilter={searchTeacherByNameFilter} />

            </div>
        </div>
    );
}

export default AdminGradeTeachers;