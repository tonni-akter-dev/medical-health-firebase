import React from 'react';

const Product = (props) => {
    const{name,image,price}=props.product;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img className="w-100" src={image} alt="" />
            <h6>{name}</h6>
            <p className="text-info">{price}</p>
        </div>
    );
};

export default Product;