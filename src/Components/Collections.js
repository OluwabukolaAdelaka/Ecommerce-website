import React from 'react';
import Product from '../images/image-product-1.jpg';
import Product2 from '../images/image-product-2.jpg';
import Product3 from '../images/image-product-3.jpg';
import Product4 from '../images/image-product-4.jpg';
import productThumb1 from '../images/image-product-1-thumbnail.jpg';
import productThumb2 from '../images/image-product-2-thumbnail.jpg';
import productThumb3 from '../images/image-product-3-thumbnail.jpg';
import productThumb4 from '../images/image-product-4-thumbnail.jpg';
import LightGallery from 'lightgallery/react';
//import {Link} from 'react-router-dom';


function Collections({count, onIncrement, onDecrement, onAdd}) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
        return (
            <div className="container">
                <div className="row myrow">
                    <div className="col-sm-12 col-lg-6">
                        <img src={Product} className="img-fluid mainProduct" alt="product" />
                        <div className="thumbnail-part">
                            <LightGallery
                                onInit={onInit}
                                speed={300}
                            >
                                <a href={Product} className="img-fluid mainProduct">
                                    <img src={productThumb1} className="img-fluid thumbnail" alt="pic" />   
                                </a>
                                <a href={Product2} className="img-fluid mainProduct">
                                    <img src={productThumb2} className="img-fluid thumbnail" alt="pic 2" />   
                                </a>
                                <a href={Product3} className="img-fluid mainProduct">
                                    <img src={productThumb3} className="img-fluid thumbnail" alt="pic 3" />   
                                </a>
                                <a href={Product4} className="img-fluid mainProduct">
                                    <img src={productThumb4} className="img-fluid thumbnail" alt="pic 4" />   
                                </a>
                               
                            </LightGallery>
                            
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 text-part">
                        <h5 className='text-part-title'>SNEAKER COMPANY</h5>
                        <h1 className='text-part-hero'>Fall Limited Edition Sneakers</h1>
                        <p className='text-part-msg'>These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand
                        anything the weather can offer.
                        </p>
                        <h1 className='discount-price'>$125.00 <small className='price-percent'>50%</small></h1>
                        <p className='orig-price'>$250.00</p>
                        <div className='addToCart'>
                           <button  onClick={onDecrement}
                            disabled={count <= 0} className="buttons">-</button>
                           <h3 className='totalNo'>{count}</h3>
                           <button onClick={onIncrement} className=" buttons">+</button>
                           <button onClick={onAdd} className="addToCartButton"><img src={require('../images/icon-cart-copy.svg').default} 
                        className='img-fluid me-2' alt="cart icon" />Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}
 
export default Collections;