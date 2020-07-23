import React from 'react';

const YouTube = props => {
    return (
        <iframe title="YouTubeVid" width="100%" height="100%" src={`https://www.youtube.com/embed/${props.videoID}`} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
    );
}
 
export default YouTube;