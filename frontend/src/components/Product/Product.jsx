import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Video from './offerVid';
import './Product.css';

export const Product = () => {
    const {id} = useParams();
    console.log(id)
    const [product,setProduct]=useState('');

    const getProduct=async()=>{
        try {
            const res=await axios.get(`https://am-hungry.herokuapp.com/products/${id}`);
            const item=res.data;
            console.log(item);
            setProduct(item);
        } catch (error) {
            console.log('err',error);
        }
    }

    useEffect(()=>{
        getProduct();
    },[id]);

  return (
    <>

        <Video/>
      <div className='productContainer'>
       <div className='imageContainer'>
            <img src={product.image_url} alt="pic" />
            <div>
            <button>Buy Now</button>
            </div>
       </div>
       <div className='productDetails'>
            {/* <h1>Details of Food</h1> */}
            <b>{product.desc}</b>
            <p>Price of single item : <b>Rs.{product.price} </b></p>
            <p>Cost for two: <b>Rs.{product.cost_for_two}</b></p>
            <p>Discount on this product : {product.off} OFF</p>
            <p>Rating is : {product.rating} <b>⭐</b></p>
            <p>Restaurant : {product.rest_name}</p>
            <p>Category : {product.category}</p>
            <p>Looking for Discount, Use the Coupon: {product.coupon}</p>
       </div>
    </div>
    </>
  )
}
