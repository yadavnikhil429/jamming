import React from 'react';
import './searchbar.css';


const Searchbar = () =>{
    return (
        <div className='SearchBar'>
            <input 
            placeholder='Enter A Song, Album, or Artist' 
            />
            
            <button className='SearchButton'>
                SEARCH
                </button>
        </div>
    )
}

export default Searchbar;   