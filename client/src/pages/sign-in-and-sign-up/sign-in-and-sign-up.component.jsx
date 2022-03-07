import { useState } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    
    const toggleForm = () => {
        setIsSignIn(isSignIn => !isSignIn);
    }

    return (
        <div className="sign-in-and-sign-up">
            <div>
                {isSignIn ? <SignIn /> : <SignUp />}
                <h4 className="sign-in-or-sign-up" onClick={toggleForm}>
                    Do not have an account? Sign Up here.
                </h4>
            </div>
        </div>
    );
};

export default SignInAndSignUpPage;