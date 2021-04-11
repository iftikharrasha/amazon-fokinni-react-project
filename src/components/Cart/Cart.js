import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        total = total + prd.price;
    }

    let shipping = 0;
    if(total > 100.00){
        shipping = 50.00;
    }else{
        shipping = 0;
    }

    const tax = total/10; 

    const grandTotal = total + shipping + Number(tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);  //tofixed is string
        return Number(precision);          //so we are parsing to number
    }
    
    return (
        <div className="product-cart">
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping: {formatNumber(shipping)}</p>
            <p>VAT: {formatNumber(tax)}</p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;