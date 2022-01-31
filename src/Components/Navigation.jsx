import React from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, 
Nav, NavItem, NavLink} from 'reactstrap';
import Logo from '../images/logo.svg';
import ProfilePic from '../images/image-avatar.png';



function Navigation() {
    return ( 
        <div className='container container-fluid'>
            <Navbar className='mynavbar'
                color="light"
                expand="md"
                light
            >
                <NavbarBrand to="/">
                <img src={Logo} alt="logo of website" />
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar >
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem className='mx-4'>
                        <NavLink href="/" className='mylinks'>
                            Collections
                        </NavLink>
                    </NavItem>
                    <NavItem className='mx-4'>
                        <NavLink href="/" className='mylinks'>
                            Men
                        </NavLink>
                    </NavItem>
                    <NavItem className='mx-4'>
                        <NavLink href="/" className='mylinks'>
                            Women
                        </NavLink>
                    </NavItem>
                    <NavItem className='mx-4'>
                        <NavLink href="/" className='mylinks'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem className='mx-4'>
                        <NavLink href="/" className='mylinks'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="me-auto">
                    <NavItem>
                        <img src={require('../images/icon-cart.svg').default} 
                        className='img-fluid mt-2' alt="cart icon" />    
                    </NavItem>
                    <NavItem>
                        <img src={ProfilePic} className='myimg img-fluid' alt="profile pic" />    
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
     );
}
 
export default Navigation;