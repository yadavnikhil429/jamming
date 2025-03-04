import React, { useCallback } from 'react';
import './track.css';



const Track = (props) => {

    const passTrack = () => {
        props.onAdd(props.track);
    };

    const passTrackToRemove = () => {
        props.onRemove(props.track);
    }



    const renderAction = () => {
        if (props.ar) {
            return (
                <button className='Track-Action' onClick={passTrackToRemove}>
                    -
                </button>
            );
        } else {
            return (
                <button className='track-Action' onClick={passTrack}>
                    +
                </button>
            );
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