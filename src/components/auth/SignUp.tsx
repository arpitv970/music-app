import './SignUp.css';

const SignUp = () => {
    return (
        <form className='d-flex flex-column justify-content-center align-items-center'>
            <div className='user-email mb-3 w-100'>
                <label>Email Address</label>
                <input
                    placeholder='Enter Email Address'
                    type='email'
                    className='form-control'
                    aria-describedby='emailHelp'
                />
            </div>
            <div className='user-pass mb-3 w-100'>
                <label>Password</label>
                <input
                    placeholder='Enter Password'
                    type='password'
                    className='form-control'
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
    );
};

export default SignUp;
