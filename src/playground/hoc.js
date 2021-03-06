// HOC - Components that render other components
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => (props) => (
    <div>
        {props.isAdmin && <p>Please do not share</p> }
        <WrappedComponent {...props} />
    </div>
);

const AdminInfo = withAdminWarning(Info);

// Require authentication
const requireAuthentication = (WrappedComponent) => (props) => (
    <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in</p>}
    </div>
);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="My info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated info="My info" />, document.getElementById('app'));
