import React from 'react';
import './SortFilter.css';

export const SortFilter = ({ filterHandler, sortHandler }) => {
  return (
    <div className='sortContainer'>
        <div>
            <b>Filter :</b>
            <select onChange={(e) => filterHandler(e.target.value)}>
                <option value="normal">Filter By</option>
                <option value="v">Veg</option>
                <option value="n">Non-Veg</option>
            </select>
        </div>
        <div>
            <b>Sorting :</b>
            <select onChange={(e) => sortHandler(e.target.value)}>
                <option value="sort">Sort By</option>
                <option value="htl">Price High To Low</option>
                <option value="lth">Price Low To High</option>
            </select>
        </div>
    </div>
  )
}
