import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Col, Grid, Button, ControlLabel, FormControl } from 'react-bootstrap';

class Authentication extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogin() {
        let email = this.state.email;
        let password = this.state.password;

        this.props.onLogin(email, password).then(
            (result) => {
                if (!result) {
                    this.setState({
                        email: "",
                        password: ""
                    });
                }
            }
        );
    }

    handleRegister() {
        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;

        this.props.onRegister(username, email, password).then(
            (result) => {
                if (!result) {
                    this.setState({
                        username: "",
                        email: "",
                        password: ""
                    });
                }
            }
        );
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        const inputBox = (
            <form>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel}>
                        Email
                    </Col>
                    <Col>
                        <FormControl type="email"
                                     name="email"
                                     placeholder="Email"
                                     value={this.state.email}
                                     onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel}>
                        Password
                    </Col>
                    <Col>
                        <FormControl type="password"
                                     name="password"
                                     placeholder="Password"
                                     value={this.state.password}
                                     onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
            </form>
        );

        const loginView = (
            <Grid>
                { inputBox }
                <Button type="submit" onClick={this.handleLogin}>
                    Login
                </Button>
                <Button type="submit">
                    Register
                </Button>
            </Grid>
        );

        const registerView = (
            <Grid>
                <form>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel}>
                            Username
                        </Col>
                        <Col>
                            <FormControl type="text"
                                         name="username"
                                         placeholder="String"
                                         value={this.state.username}
                                         onChange={this.handleChange}/>
                        </Col>
                    </FormGroup>
                </form>
                { inputBox }
                <Button type="submit" onClick={this.handleRegister}>
                    Register
                </Button>
            </Grid>
        );

        return (
            <div>
                { this.props.mode ? loginView : registerView }
            </div>
        );
    }
}

Authentication.protoType = {
    mode: PropTypes.bool,
    onLogin: PropTypes.func,
    onRegister: PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onLogin: (email, password) => { console.error("login function not defined"); },
    onRegister: (username, email, password) => { console.error("register function not defined"); }
};

export default Authentication;