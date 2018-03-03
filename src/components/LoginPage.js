import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithGithub } from '../actions/auth';

export const Login = ({ loginWithGoogle, loginWithGithub }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>Time to get your expenses under control</p>
            <button className="button" onClick={loginWithGoogle}>Login with Google</button>
            <button className="button" onClick={loginWithGithub}>Login with GitHub</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    loginWithGoogle: () => dispatch(startLoginWithGoogle()),
    loginWithGithub: () => dispatch(startLoginWithGithub()),
});

export default connect(undefined, mapDispatchToProps)(Login);
