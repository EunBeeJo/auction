import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const loginNavItem = (
            <Nav pullRight>
                <NavItem eventKey={1} onClick={this.props.onLogout}>로그아웃</NavItem>
                <NavItem eventKey={2} href="#">장바구니</NavItem>
                <NavItem eventKey={3} href="#">마이페이지</NavItem>
            </Nav>
        );

        const nonLoginNavItem = (
            <Nav pullRight>
                <NavItem eventKey={1} href="/login"> <Link to="/login">로그인</Link> </NavItem>
                <NavItem eventKey={2} href="/register"> <Link to="/register">회원가입</Link> </NavItem>
            </Nav>
        );

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/home">Auction</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    { this.props.isLoggedIn ? loginNavItem : nonLoginNavItem }
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    onLogout: PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined"); }
};

export default Header;