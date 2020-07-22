import React from 'react';
import YouTube from './MediaPlayers/YouTube';

class MediaWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            media: ''
        }
    }

    handleMedia() {
        //* CHECK THAT PROPS ARE AVAILABLE FIRST
        if(this.props.source) {
            //* SAVE SHORTER REFERENCE TO 
            const {source} = this.props;
            const prefix = source.match(/\/([a-z]{2})\//)[1];

            switch (prefix) {
                case 'yt':
                    console.log(`It's a Youtube Video`);
                    const videoID = source.match(/\/[a-z]{2}\/(.+)/)[1];
                    return <YouTube videoID={videoID} />            
                default:
                    break;
            }

            return this.props.source
        }
    }

    
    render() { 
        return (
            <div className="container">
                {this.handleMedia()}
            </div>
         );
    }
}
 
export default MediaWindow;