import React from 'react';
import './tracklist.css';
import Track from '../track/track';


const Tracklist = (props) => {
    return (
        <div className='Tracklist'>

{(props.y || []).map((track) =>{
    return(
        <Track

        key={track.id}
        track={track}
       
        ar={props.isRemoval}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
    />
    );
       })}
           
        </div>
    );
};

export default Tracklist;