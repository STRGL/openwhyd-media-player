import React from 'react';
import Track from './Track';


//* PLAYLIST COMPONENT TO BROWSE AVAILABLE MEDIA
const Playlist = props => {
    //* MAP DATA TO COMPONENTS
    const trackComponents = props.tracks.map((track,index)  => <Track key={track._id} id={track.eId} image={track.img} trackName={track.name} username={track.uNm} index={index} handleClick={props.handleClick}/> )
    return ( 
        <div className="playlist">
            {props.loading ? 'Loading Tracks...': trackComponents}   
            {!props.loading && <><button className="backward" onClick={props.handleSkip} data-skip={props.hasMore - 20} disabled={props.hasMore === 20}>Back</button><button className="forward" onClick={props.handleSkip} data-skip={props.hasMore} disabled={!props.hasMore}>Forward</button></>}
        </div>
    );
}
 
export default Playlist;