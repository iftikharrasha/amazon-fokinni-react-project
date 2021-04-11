import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="product-img"/>
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <br/>
                <p>Outlet: <small>{seller}</small></p>
                <p>${price}</p>
                <br/>
                <p>Only left in stock: {stock}</p>
                <button 
                    onClick={() => props.handlerAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;