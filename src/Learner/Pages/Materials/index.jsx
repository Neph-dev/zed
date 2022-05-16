import React, { useEffect } from 'react';

import { MaterialListData } from '../../../Teacher/Mock';

import LearnerHeader from '../../Components/Header';
import MaterialList from '../../../Components/MaterialList';


function LearnerMaterials() {

    const activeNav = 'subjects';

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="Pages">

            <LearnerHeader activeNav={activeNav} />

            <div className="PagesContent">
                <MaterialList Materials={MaterialListData} />
            </div>
        </div>
    );
}

export default LearnerMaterials;