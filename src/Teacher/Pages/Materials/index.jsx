import React, { useEffect } from 'react';

import { MaterialListData } from '../../Mock';

import MaterialList from '../../../Components/MaterialList';
import TeacherHeader from '../../Components/Header';


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

                <MaterialList Materials={MaterialListData} />

            </div>
        </div>
    );
}

export default TeacherMaterials;