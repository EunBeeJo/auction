import React from 'react';
import { Header } from '../components';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/authentication';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logoutRequest().then(
            () => {
                if (this.props.status.isLoggedIn === false) {
                    console.log("logout success");
                    this.props.history.push('/home');
                }
            }
        )
    }

    render() {
        return(
            <div>
                <Header isLoggedIn={this.props.status.isLoggedIn} onLogout={this.handleLogout}/>
                { this.props.children }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);