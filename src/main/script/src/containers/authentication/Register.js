import React from 'react';
import Authentication from "../../components/Authentication";
import { registerRequest } from '../../actions/authentication'
import { connect } from 'react-redux';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(name, email, password) {
        return this.props.registerRequest(name, email, password).then(
            () => {
                if (this.props.status === "SUCCESS") {
                    console.log("REGISTER SUCCESS");
                    this.props.history.push('/login');
                    return true;
                } else {
                    console.log("REGISTER FAIL " + this.props.errorCode);
                    // TODO
                    // toast fail msg
                    return false;
                }
            }
        )
    }

    render() {
        return (
            <div>
                <Authentication mode={false}
                                onRegister={this.handleRegister}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.register.status,
        errorCode: state.authentication.register.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerRequest: (name, email, password) => {
            return dispatch(registerRequest(name, email, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);