import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { SortFilter } from '../SortFilter/SortFilter';
import Video from '../Video/Videos';
import './Products.css';


export const Products = () => {
    const [Products,setProducts]=useState([]);
    const [page,setPage] = useState(12);
    const [data,setData]=useState([]);
    const [itemPerPage,setItemPerPage]=useState(12)
    const [currentPage,setCurrentPage]=useState(1)

    const getData=async()=>{
        try {
            const res=await axios.get(`https://am-hungry.herokuapp.com/products`);
            const data=res.data;
            setProducts(data);
            setData(data);
        } catch (error) {
            console.log('err',error);
        }
    }
    
const numOfTotalPages=Math.ceil(Products.length/itemPerPage)

const pages=[...Array(numOfTotalPages+1).keys()].slice(1)

const indexOfLastItem=currentPage* itemPerPage;
const indexOfFirstItem=indexOfLastItem-itemPerPage;

const visibleItem=Products.slice(indexOfFirstItem,indexOfLastItem)

    const sortHandler = (value) => {
        console.log(value);
        if (value === "htl") {
          setProducts([...(Products).sort((a, b) => b.price - a.price)]);
        } else if (value === "lth") {
          setProducts([...(Products).sort((a, b) => a.price - b.price)]);
        } else {
          setProducts(Products);
        }
      };

      const filterHandler = (value) => {
        console.log(value);
        if (value === "v") {
          setProducts(
            data
              .filter((el) => el.category == "veg")
          );
        } else if (value === "n") {
          setProducts(
            data
              .filter((el) => el.category == "nonveg")
          );
        }else {
          setProducts(data);
        }
      };
    

    useEffect(()=>{
        getData();
    },[page]);
  return (
    <>
    <Video/>
    <SortFilter sortHandler={sortHandler} filterHandler={filterHandler}/>
    <div className='productsContainer'>
        
        {visibleItem.map((el)=>(
             <Link className='link1' key={el._id} to={`/products/${el._id}`}><Cart className="cart" el={el}/></Link>
        ))}
    </div>
    <p className='paginate'>
    {pages.map((page)=>{
        return(
          <span key={page} onClick={()=>setCurrentPage(page)}>{`${page} `}</span>
        )
    })}
</p>
    </>
    
  )
}
