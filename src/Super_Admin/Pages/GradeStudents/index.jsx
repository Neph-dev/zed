import React, { useEffect, useState } from 'react';

import { Students } from '../../Mock';

import AdminHeader from '../../Components/Header';
import GroupListComponent from '../../Components/GroupListComponent';


function AdminGradeStudents() {

    const activeNav = 'school'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [studentList, setStudentList] = useState(Students)
    const [studentFilterData, setStudentFilterData] = useState(Students)
    const [searchStudentByName, setSearchStudentByName] = useState('')

    const searchStudentByNameFilter = (text) => {
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
        <div id='Pages'>

            <AdminHeader activeNav={activeNav} />

            <div className='PagesContent'>
                <GroupListComponent
                    searchByName={searchStudentByName}
                    filterData={studentFilterData}
                    searchByNameFilter={searchStudentByNameFilter} />
            </div>
        </div>
    );
}

export default AdminGradeStudents;