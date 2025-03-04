import React from 'react';
import './playlist.css';
import Tracklist from '../tracklist/tracklist';


const Playlist = (props) =>{

     const handleNameChange = ({target}) =>{
        props.onNameChange(target.value)
     }

    return (
        <div className='Playlist'>
            <input defaultValue='New Playlist' onChange={handleNameChange} />

            <Tracklist 
            y={props.m} 
            isRemoval={true}
            onRemove={props.onRemove}
            />

            <button className='Playlist-save' onClick={props.onSave}>
                SAVE TO SPOTIFY
            </button>

        </div>
    )
}

export default Playlist;