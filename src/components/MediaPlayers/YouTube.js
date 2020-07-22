import React from 'react';

const YouTube = props => {
    return (
        <iframe title="M" width="560" height="315" src={`https://www.youtube.com/embed/${props.videoID}`} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
    );
}
 
export default YouTube;