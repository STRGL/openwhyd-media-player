import React from 'react';

const Track = props => {
    return (  
        <div>
            <img className="trackImage" src={props.image} alt={`${props.trackName} artwork`} />
            <p className="username">{props.username}</p>
            <p className="trackName">{props.trackName}</p>
        </div>
    );
}
 
export default Track;