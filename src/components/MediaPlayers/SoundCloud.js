import React from 'react';

const SoundCloud = props => {
    return (
        <div className="soundcloud">
            <iframe title="SoundCloudPlayer" width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=${props.url}&color=%234a3040&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>    
        </div>
        );
}
 
export default SoundCloud;