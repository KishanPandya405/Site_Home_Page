import React from 'react'
import '../Styles/Product.css'
 
const Product = () => {
  return (
    <div className='product'>
        <h3>Our Process</h3>
        <div className="sub-product">
            <img src="product1.png" alt="" />
            <h4>Step 1</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
        </div>
        <div className="sub-product">
            <img src="product1.png" alt="" />
            <h4>Step 1</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
        </div>
        <div className="sub-product">
            <img src="product1.png" alt="" />
            <h4>Step 1</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
        </div>
    </div>
  )
}

export default Product;