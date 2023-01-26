import { useState } from 'react';
import Header from '../Header';
import { User } from '../Interfaces/User';

const CreateAcc = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const user = {
        userName,
        email,
        pass,
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!userName) {
            return alert('Enter User Name');
        }
        if (!email) {
            return alert('Enter Email');
        }
        if (!pass) {
            return alert('Enter Password');
        }
        if (!confirmPass) {
            return alert('Re-enter Password');
        }

        if (pass != confirmPass) {
            return alert('Re-enter correct Password');
        }

        setUserName(userName);
        setEmail(email);
        setPass(pass);

        localStorage.setItem('usersDB', JSON.stringify(user));
        return alert('Acc Created!');
    };

    return (
        <div>
            <Header title='Create Your Account' />
            <form
                onSubmit={handleSubmit}
                className='d-flex flex-column justify-content-center m-auto align-items-center'
            >
                <div className='user-name mb-3 w-100'>
                    <label>Full Name</label>
                    <input
                        placeholder='Enter Full Name'
                        type='text'
                        className='form-control border border-secondary'
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </div>
                <div className='user-email mb-3 w-100'>
                    <label>Email Address</label>
                    <input
                        placeholder='Enter Email Address'
                        type='email'
                        className='form-control border border-secondary'
                        aria-describedby='emailHelp'
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className='user-pass mb-3 w-100'>
                    <label>Password</label>
                    <input
                        placeholder='Enter Password'
                        type='password'
                        className='form-control border border-secondary'
                        aria-describedby='passwordHelpBlock'
                        onChange={(e) => {
                            setPass(e.target.value);
                        }}
                    />
                </div>
                <div className='user-pass mb-3 w-100'>
                    <label>Confirm Password</label>
                    <input
                        placeholder='Enter Password Again'
                        type='password'
                        className='form-control border border-secondary'
                        aria-describedby='passwordHelpBlock'
                        onChange={(e) => {
                            setConfirmPass(e.target.value);
                        }}
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
