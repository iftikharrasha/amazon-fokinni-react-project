import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    // console.log(fakeData);
    return (
        <div className="shop-container">
            <div className="products-container">
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h3>This is a cart</h3>
            </div>
        </div>
    );
};

export default Shop;