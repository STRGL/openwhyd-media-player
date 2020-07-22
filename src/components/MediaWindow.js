import React from 'react';

class MediaWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <iframe title="M" width="560" height="315" src="https://www.youtube.com/embed/scnaicOkXDY" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
            </div>
         );
    }
}
 
export default MediaWindow;