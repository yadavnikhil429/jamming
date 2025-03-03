import React from 'react';
import './track.css';



const Track = (props) =>{

   const renderAction = ()=>{
    if(props.ar){
        return(
            <button className='Track-Action'>-</button>
        );
    } else{
        return(
            <button className='track-Action'>+</button>
        );
    };

    const passTrack = ()=>{
        props.onAdd(props.track);
    };


   }    

    return (
        <div className='Track'>
          <div className='Track-information'>
            <h3>{props.track.name}</h3>
            <p>
                {props.track.artist} | {props.track.album}
            </p>
            </div> 
            {renderAction()}
        </div>
    )
}

export default Track;