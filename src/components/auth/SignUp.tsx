import './SignUp.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const userDB = localStorage.getItem('userDB') || '{}';
const userEmail = JSON.parse(userDB).email;
const userPass = JSON.parse(userDB).pass;

const SignUp = ({ isAuth, setIsAuth }: Props) => {
    const [email, setEmail] = useState<string>('asdf');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!userDB) {
            return alert('No user found!');
        }

        if (email !== userEmail && pass !== userPass) {
            return alert('Wrong credentials, please enter the correct ones');
        } else {
            setIsAuth(!isAuth);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='d-flex flex-column justify-content-center align-items-center'
        >
            {isAuth && <Navigate replace to='/' />}
            <div className='user-email mb-3 w-100'>
                <label>Email Address</label>
                <input
                    placeholder='Enter Email Address'
                    type='email'
                    className='form-control'
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
                    className='form-control'
                    aria-describedby='passwordHelpBlock'
                    onChange={(e) => {
                        setPass(e.target.value);
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
    );
};

export default SignUp;
