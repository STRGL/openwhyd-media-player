import React from 'react';
import Track from './Track';


//* PLAYLIST COMPONENT TO BROWSE AVAILABLE MEDIA
const Playlist = props => {
    //* MAP DATA TO COMPONENTS
    const trackComponents = props.tracks.map((track,index)  => <Track key={track._id} id={track.eId} image={track.img} trackName={track.name} username={track.uNm} index={index} handleClick={props.handleClick}/> )
    return ( 
        <div>
            {props.loading ? 'Loading Tracks...': trackComponents}            
        </div>
    );
}
 
export default Playlist;