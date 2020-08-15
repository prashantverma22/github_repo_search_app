import React, {useState, useContext} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';

import {Link} from 'react-router-dom';
import {UserContext} from '../context/UserContext';

const Header = () => {
    const context = useContext(UserContext);

    const [isToggle, setIsToggle] = useState(false);

    const toggle = () => setIsToggle(!isToggle);

    return(
        <Navbar color="light" light expand="md">
            <NavbarBrand>
                <Link to='/' className='text-white'>
                GitSearch
                </Link>
            </NavbarBrand>
            <NavbarText>
                { context.user?.email ? context.user.email : '' }
            </NavbarText>
            <NavbarToggler onClick = {toggle} />
            <Collapse isOpen = {isToggle} navbar>
            <Nav className='ml-auto' navbar>
                {
                    context.user ? (
                        <NavItem>
                          <NavLink tag={Link} onClick={() => {context.setUser(null)}}>Logout</NavLink>
                        </NavItem>
                    ) : (
                        <>
                        <NavItem>
                          <NavLink tag={Link} to='/signup'>Sign up</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink tag={Link} to='/signin'>Sign in</NavLink>
                        </NavItem>
                        </>
                    )
                }
            </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;
