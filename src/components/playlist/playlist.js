import React from 'react';
import './playlist.css';
import Tracklist from '../tracklist/tracklist';


const Playlist = (props) =>{
    return (
        <div className='Playlist'>
            <input defaultValue='New Playlist'/>

            <Tracklist 
            y={props.m} 
            isRemoval={true}
            />

            <button className='Playlist-save'>
                SAVE TO SPOTIFY
            </button>

        </div>
    )
}

export default Playlist;