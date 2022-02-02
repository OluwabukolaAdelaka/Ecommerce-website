import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, 
Nav, NavItem, Badge} from 'reactstrap';
import Logo from '../images/logo.svg';
import ProfilePic from '../images/image-avatar.png';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ProductCart from '../images/image-product-1-copy.jpg';




function Navigation({cart}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    const viewCart = () => {
        cart === 0 ?  toast.warn("Your cart is empty, please select item(s)") : 
        toast(
        <div>
            <h3>Cart</h3>
            <div className='cartProductDisplay'>
                <img src={ProductCart} className="img-fluid cartProduct" alt="product" />
                <div className='productInfo'>
                    <p>Fall Limited Edition Sneakers</p>
                    <p className='orig-price-cart'>$125.00 x {cart} <small className='discount-price-cart'>${cart * 125}</small></p>
                </div>
            </div>
            <button onClick={processingOrder} className="addToCartButtonCart">Checkout</button>
        </div>
        );
    }

    const processingOrder = () => {
        const resolveAfter2Sec = new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(
                resolveAfter2Sec,
                    {
                    pending: 'Processing your order',
                    success: 'Your order is processed 👌'
                    }
        )
    }

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
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem className='mx-4'>
                       
                            <Link to="/" className='mylinks' >Collections</Link>
                        
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
                        <button onClick={viewCart} className='badgeBtn'>
                            <img src={require('../images/icon-cart.svg').default} 
                            className='img-fluid mt-2 myCart' alt="cart icon" />
                          <Badge pill color=""
                          className="mybadge">{cart}</Badge>
                        </button>
                    </NavItem>
                    <NavItem>
                        <img src={ProfilePic} className='myimg img-fluid' alt="profile pic" />    
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            <ToastContainer />
        </div>
     );
}
 
export default Navigation;