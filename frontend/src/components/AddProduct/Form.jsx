import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Form.css';

export const Form = () => {
const navigate= useNavigate()
    
    const [formData,setFormData]=useState({
        
rest_name:"",
image_url:"",
price:"",
cost_for_two:"",
off:"",
category:"",
rating:"",
    });

    const hanldeChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post(`https://am-hungry.herokuapp.com/products`,formData);
        setFormData({rest_name:"",
        desc:"",
        image_url:"",
        price:"",
        cost_for_two:"",
        off:"",
        category:"",
        rating:""});

        alert('Your Restaurant Added With Us');
        navigate('/')
    }


  return (
    <div className='formContainer'>
        <div>
            <h1 className='formTitle'>Want to Become a Contributer 🤔</h1>
            <h3>Add Your Data Here</h3>
        </div>
        <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="">Restaurant Name : </label>
            <input type="text" name="rest_name" value={formData.rest_name} onChange={hanldeChange} placeholder='Enter Reastaurant name...' required/>
        </div>
        <div>
            <label htmlFor="">Dish Type : </label>
            <input type="text" name="desc" value={formData.desc} onChange={hanldeChange} placeholder='American/ South Indian/ North Indian...' required/>
        </div>
        <div>
            <label htmlFor="">Image Url: </label>
            <input type="url" name="image_url" value={formData.image_url} onChange={hanldeChange} placeholder='Enter image url...' required/>
        </div>
        <div>
            <label htmlFor="">Food Price :</label>
            <input type="Number" name="price" value={formData.price} onChange={hanldeChange} placeholder='Enter food price...' required/>
        </div>
        <div>
            <label htmlFor="">Food Price for Two:</label>
            <input type="Number" name="cost_for_two" value={formData.cost_for_two} onChange={hanldeChange} placeholder='Cost for two people...' required/>
        </div>
        <div>
            <label htmlFor="">Discount :</label>
            <input type="Number" name="off" value={formData.off} onChange={hanldeChange} placeholder='Discount Percentage...' required/>
        </div>
        <div>
            <label htmlFor="">Food Category :</label>
            <input type="text" name="category" value={formData.category} onChange={hanldeChange} placeholder='veg or nonveg (small letter)...' required/>
        </div>
        <div>
            <label htmlFor="">Rating :</label>
            <input type="Number" name="rating" value={formData.rating} onChange={hanldeChange} placeholder='Rate your Restaurant...' required/>
        </div>

        <div>
            <button>Add Your Restaurant</button>
        </div>
        </form>
        
    </div>
  )
}

