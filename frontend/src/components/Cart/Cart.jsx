import React from 'react';
import './Cart.css';

export const Cart = ({el}) => {
    console.log(el);
  return (
    <div className='cartContainer'>
        <div className='imageDiv'>
            <img src={el.image_url} alt="image" />
        </div>
        <div>
            <h3>{el.rest_name}</h3>
            <p>{el.desc} {(el.category=="veg")? "💚" : "❤️"}</p>
            <div className='flex'>
                <p>Price : {el.price} Rs.</p>
                <p>Offer : {el.off} OFF</p>
            </div>
            <b>Rating : {el.rating} ⭐</b>
        </div>
    </div>
  )
}
