import React from 'react';
import './searchresults.css';
import Tracklist from '../tracklist/tracklist';


const Searchresult = (props) => {
    return (
        <div className='Searchresults'>
            <h2>Results</h2>

            <Tracklist 
            y={props.x} 
            onAdd={props.onAdd} 
            isRemoval={false}
            />

        </div>
    )
}

export default Searchresult;