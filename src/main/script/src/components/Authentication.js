import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Col, Grid, Button, ControlLabel, FormControl } from 'react-bootstrap';

class Authentication extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {

    }

    render() {
        const inputBox = (
            <form>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel}>
                        Email
                    </Col>
                    <Col>
                        <FormControl type="email" placeholder="Email"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel}>
                        Password
                    </Col>
                    <Col>
                        <FormControl type="password" placeholder="Password"/>
                    </Col>
                </FormGroup>
            </form>
        );

        const loginView = (
            <Grid>
                { inputBox }
                <Button type="submit" onClick={this.handleLogin}>
                    Sign In
                </Button>
                <Button type="submit">
                    Sign Up
                </Button>
            </Grid>
        );

        const registerView = (
            <Grid>
                <form>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel}>
                            Name
                        </Col>
                        <Col>
                            <FormControl type="name" placeholder="String"/>
                        </Col>
                    </FormGroup>
                </form>
                { inputBox }
                <Button type="submit">
                    Sign Up
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
    onLogin: PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onLogin: (email, password) => { console.error("login function not defined"); }
};

export default Authentication;