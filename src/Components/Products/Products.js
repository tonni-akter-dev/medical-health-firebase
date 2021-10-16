import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch(
            "https://raw.githubusercontent.com/gias-uddin-swe/dcotor-fakeData/main/faakedata.json"
          )
            .then((res) => res.json())
            .then((result) => setProducts(result));
    },[]);

    return (
        <div className="container">
            <div className="prevention d-flex justify-content-center p-5">
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
        <h6 className="ms-3 me-3">Our Products</h6>
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
      </div>
      <h1 className="mt-5">Shop By Category</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa
          </p>
          <div className="button-continer">
            <button className="btn-0">New Arrivals</button>
            <button className="btn-1">Featured</button>
            <button className="btn-1">Best Sellers</button>
          </div>

<div className="row">
{
    products.map(product=><Product 
        key={product.id}
    product={product}
    ></Product>)
}
</div>


        </div>
    );
};

export default Products;