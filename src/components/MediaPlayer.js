import React from 'react';
import Playlist from './Playlist';
// import Track from './Track';
import MediaWindow from './MediaWindow';

class MediaPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false, 
            tracks: {
                tracks: []
            }
        }
    }

    componentDidMount() {
        //* SET LOADING TO TRUE
        this.setState({isLoading: true});
        
        //* GET ALL THE HOT TRACKS
        fetch('https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot?format=json')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                //* SET LOADING BACK TO FALSE AND SET STATE
                this.setState({
                    isLoading: false,
                    tracks: data,
                })
            }).catch(e => {
                //* CATCH ERROR IF TRACKS FAIL TO LOAD
                console.warn(`Failed to load data. Error: ${e}`)
            });
    }

    handleClick() {

    }
    
    render() { 
        //* SAVE SHORTER REFERENCE TO TRACKS
        const tracksData = this.state.tracks.tracks;
        // const trackComponents = tracksData.map(track => <Track key={track._id} image={track.img} name={track.name} username={track.uNm}/> )

        return ( 
            <div>
                <h1>{this.state.isLoading ? 'Loading...' : 'Music'}</h1>
                {/* {this.state.isLoading? 'Tracks will be here momentarily': trackComponents} */}
                <MediaWindow />
                <Playlist tracks={tracksData} loading={this.state.isLoading}/>
            </div>
        );
    }
}
 
export default MediaPlayer;