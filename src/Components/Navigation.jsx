import React from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, 
Nav, NavItem, Badge} from 'reactstrap';
import Logo from '../images/logo.svg';
import ProfilePic from '../images/image-avatar.png';
import {Link} from 'react-router-dom';




function Navigation({cart}) {
    return ( 
        <div className='container container-fluid'>
            <Navbar className='mynavbar sticky'
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
                       
                            <Link to="/collections" className='mylinks' >Collections</Link>
                        
                    </NavItem>
                    <NavItem className='mx-4'>
                        
                            <Link to="/men" className='mylinks'>Men</Link>
                        
                    </NavItem>
                    <NavItem className='mx-4'>
                        
                            <Link to="/women" className='mylinks'>Women</Link>
                       
                    </NavItem>
                    <NavItem className='mx-4'>
                        
                            <Link to="/about" className='mylinks'>About</Link>
                        
                    </NavItem>
                    <NavItem className='mx-4'>
                        
                            <Link to="/contact" className='mylinks'>Contact</Link>
                       
                    </NavItem>
                </Nav>
                <Nav className="me-auto">
                    <NavItem>
                        <img src={require('../images/icon-cart.svg').default} 
                            className='img-fluid mt-2 myCart' alt="cart icon" />
                          <Badge pill color="" className="mybadge">{cart}</Badge>
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