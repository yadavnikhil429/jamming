import React, { useState } from 'react';
import './searchbar.css';


const Searchbar = (props) =>{

    const [term, setTerm] = useState('');

    const handleTermChange = (event)=>{
       
        setTerm(event.target.value);
    }

    const passTerm = ()=>{
       props.onSearch(term);
    }

    return (
        <div className='SearchBar'>
            <input 
            placeholder='Enter A Song, Album, or Artist'
            onChange={handleTermChange} 
            />

            <button className='SearchButton' onClick={passTerm}>
                SEARCH
                </button>
        </div>
    )
}

export default Searchbar;   