import React from 'react';
import Track from './Track';


//* PLAYLIST COMPONENT TO BROWSE AVAILABLE MEDIA
const Playlist = props => {
    //* MAP DATA TO COMPONENTS
    const trackComponents = props.tracks.map(track => <Track key={track._id} image={track.img} trackName={track.name} username={track.uNm}/> )
    return ( 
        <div>
            {props.loading ? 'Loading Tracks...': trackComponents}            
        </div>
    );
}
 
export default Playlist;