import React, { useEffect, useState } from 'react';

import './AccountForm.css';


function AccountForm() {

    const [firstNameInput, setFirstNameInput] = useState('Nephthali')
    const [lastNameInput, setlastNameInput] = useState('Salam')
    const [emailInput, setEmailInput] = useState('snephthali@gmail.com')
    const [passwordInput, setPasswordInput] = useState('pass123')

    const [edit, setEdit] = useState(false)

    const handleSave = () => {
        setEdit(false);

        window.location.reload(true);
    }

    return (
        <div id='AccountForm'>

            <div className='AccountForm-title'>
                Personal Account
            </div>

            <div className='AccountForm-profile-image' />

            <div className='AccountForm-inputs'>

                <div className='AccountForm-label_input'>
                    <div>
                        <div>
                            <div className='AccountForm-label'>
                                First name
                            </div>
                            <input
                                value={firstNameInput}
                                onChange={(e) => setFirstNameInput(e.target.value)}
                                type="text" readOnly={true} />
                        </div>

                        <div>
                            <div className='AccountForm-label'>
                                Last name
                            </div>
                            <input
                                value={lastNameInput}
                                onChange={(e) => setlastNameInput(e.target.value)}
                                type="text" readOnly={true} />
                        </div>

                        <div>
                            <div className='AccountForm-label'>
                                Student Number
                            </div>
                            <input
                                type="text" readOnly={true} />
                        </div>

                        <div>
                            <div className='AccountForm-label'>
                                Grade
                            </div>
                            <input
                                type="text" readOnly={true} />
                        </div>

                        <div style={{ marginTop: '50px' }}>

                            <div
                                onClick={() => setEdit(true)}
                                className='AccountForm-profile-edit'>
                                Edit
                            </div>

                            <div className='AccountForm-label'>
                                Email
                            </div>
                            <input
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                type="text"
                                readOnly={edit ? false : true} />
                        </div>
                        <div>
                            <div className='AccountForm-label'>
                                Password
                            </div>
                            <input
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                type="password"
                                readOnly={edit ? false : true} />
                        </div>

                        <div className="AccountForm-btns">
                            <button
                                onClick={handleSave}
                                className={
                                    edit && emailInput !== '' && passwordInput !== ''
                                        ? "AccountForm-save-btn-act"
                                        : "AccountForm-save-btn"}>
                                Save changes
                            </button>
                            <button
                                onClick={() => setEdit(false)}
                                className={edit
                                    ? "AccountForm-cancel-btn-act"
                                    : "AccountForm-cancel-btn"}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AccountForm;