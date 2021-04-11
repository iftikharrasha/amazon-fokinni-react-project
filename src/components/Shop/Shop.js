import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    // console.log(fakeData);

    const handlerAddProduct = (product) =>{
        console.log("Product Added", product);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product product={product} handlerAddProduct={handlerAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>This is a cart</h3>
            </div>
        </div>
    );
};

export default Shop;