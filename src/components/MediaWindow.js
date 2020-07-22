import React from 'react';
import YouTube from './MediaPlayers/YouTube';
import SoundCloud from './MediaPlayers/SoundCloud';

//*CHANGED TO STATELESS FUNCTIONAL COMPONENT. DIDN'T NEED CLASS COMPONENT
const MediaWindow = props => {

    const handleMedia = () => {
        //* CHECK THAT PROPS ARE AVAILABLE FIRST
        if(props.source) {
            //* SAVE SHORTER REFERENCE TO 
            const {source} = props;
            const prefix = source.match(/\/([a-z]{2})\//)[1];
            switch (prefix) {
                case 'yt':
                    console.log(`It's a Youtube Video`);
                    //* STRIP YOUTUBE ID FROM EID
                    const videoID = source.match(/\/[a-z]{2}\/(.+)/)[1];
                    return <YouTube videoID={videoID} />            
                case 'sc':
                    console.log(`It's a SoundCloud Track`, source.match(/\/[a-z]{2}\/(\w+)\/(.+)#(.+)\/stream/));
                    //* STRIP URL FROM EID
                    const soundcloudUrl = source.match(/\/[a-z]{2}\/(\w+)\/(.+)#(.+)\/stream/)[3];
                    return <SoundCloud url={soundcloudUrl} />            
                default:
                    console.warn(`Case "${prefix}" not handled.`)
                    return false;
            }
        }
    }

    return (
        <div className="container">
            {handleMedia()}
        </div>
        );
}
 
export default MediaWindow;