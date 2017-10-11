import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/home">Auction</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/auction/login"> <Link to="/auction/login">로그인</Link> </NavItem>
                        <NavItem eventKey={2} href="/auction/register"> <Link to="/auction/register">회원가입</Link> </NavItem>
                        <NavItem eventKey={3} href="#">장바구니</NavItem>
                        <NavItem eventKey={4} href="#">마이페이지</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;