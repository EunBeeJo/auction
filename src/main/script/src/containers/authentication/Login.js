import React from 'react';
import { Authentication } from '../../components';
import { loginRequest } from '../../actions/authentication'
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(email, password) {
        return this.props.loginRequest(email, password).then(
            () => {
                if (this.props.status === "SUCCESS") {
                    // create session data
                    let loginData = {
                        isLoggedIn: true,
                        email: email
                    };

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                    this.props.history.push('/home');
                    return true;
                } else {
                    return false;
                }
            }
        );
    }

    render() {
        return (
            <div>
                <Authentication mode={true} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (email, password) => {
            return dispatch(loginRequest(email, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);