import React from 'react';
import { Link } from 'react-router-dom';
import CreateAcc from './CreateAcc';
import SignUp from './SignUp';
import Header from '../Header';

interface Props {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthUser = ({ isAuth, setIsAuth }: Props) => {
    return (
        <div>
            <Header title='Sign Up' />
            <section className='d-flex flex-column w-75 m-auto justify-content-between align-items-center'>
                <SignUp isAuth={isAuth} setIsAuth={setIsAuth} />
                <Link to='/create-user'>Create New Account</Link>
            </section>
        </div>
    );
};

export default AuthUser;
