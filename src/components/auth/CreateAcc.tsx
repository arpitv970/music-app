import { useState } from 'react';
import Header from '../Header';

const CreateAcc = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    return (
        <div>
            <Header title='Create Your Account' />
            <form className='d-flex flex-column justify-content-center m-auto align-items-center'>
                <div className='user-name mb-3 w-100'>
                    <label>Full Name</label>
                    <input
                        placeholder='Enter Full Name'
                        type='text'
                        className='form-control border border-secondary'
                    />
                </div>
                <div className='user-email mb-3 w-100'>
                    <label>Email Address</label>
                    <input
                        placeholder='Enter Email Address'
                        type='email'
                        className='form-control border border-secondary'
                        aria-describedby='emailHelp'
                    />
                </div>
                <div className='user-pass mb-3 w-100'>
                    <label>Password</label>
                    <input
                        placeholder='Enter Password'
                        type='password'
                        className='form-control border border-secondary'
                        aria-describedby='passwordHelpBlock'
                    />
                </div>
                <div className='user-pass mb-3 w-100'>
                    <label>Confirm Password</label>
                    <input
                        placeholder='Enter Password Again'
                        type='password'
                        className='form-control border border-secondary'
                        aria-describedby='passwordHelpBlock'
                    />
                </div>
                <button
                    type='submit'
                    className='my-3 mx-auto w-50 align-items-center justify-content-center d-flex btn btn-primary'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateAcc;
