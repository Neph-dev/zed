import React, { useEffect } from 'react';

import TeacherHeader from '../../Components/Header';

import TeacherMaterialList from '../../Components/TeacherMaterialList';


function TeacherMaterials() {

    const activeNav = 'classes'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='Pages'>

            <TeacherHeader activeNav={activeNav} />

            <div className='PagesContent'>

                <TeacherMaterialList />

            </div>
        </div>
    );
}

export default TeacherMaterials;