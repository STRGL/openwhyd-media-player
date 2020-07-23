import React from 'react';
import Playlist from './Playlist';
import MediaWindow from './MediaWindow';

class MediaPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialLaunch: true,
            isLoading: false, 
            playlist: {
                hasMore: {
                    skip: 0
                },
                tracks: []
            },
            current: null,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    //* REFACTORED OUT INTO SEPERATE FUNCTION IN ORDER TO REUSE UPON CHANGING SKIP
    getPlaylist() {
         //* GET ALL THE HOT TRACKS
         fetch(`https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot?format=json&skip=${this.props.skip}`)
         .then(res => res.json())
         .then((data) => {
             console.log(data.tracks);
             //* SET LOADING BACK TO FALSE AND SET STATE
             this.setState(prevState => {
                return {
                    isLoading: false,
                    playlist: data,
                }
             })
             //* CHECK IF THIS IS THE FIRST TIME THE COMPONENT IS BEING RENDERED. IF IT IS THEN SET CURRENT TO FIRST TRACK BUT ONLY THE FIRST TIME. THIS ALLOWS FOR BROWSING TRACKS WITHOUT INTERRUPTING PLAYBACK
             if(this.state.initialLaunch) {
                 this.setState({
                     current: data.tracks[0].eId,
                     initialLaunch: false
                    });
             }
         }).catch(e => {
             //* CATCH ERROR IF TRACKS FAIL TO LOAD
             this.setState({isLoading: false});
             console.warn(`Failed to load data. Error: ${e}`)
         });
    }

    componentDidMount() {
        //* SET LOADING TO TRUE
        this.setState({isLoading: true});
        this.getPlaylist();
    }

    componentDidUpdate(prevProps, prevState){
        console.log('HERE COMES THE UPDATE...');
        const skip = {
            stateSkip: this.state.playlist.hasMore.skip,
            propsSkip: this.props.skip,
            prevStateSkip: prevState.playlist.hasMore.skip,
            prevPropsSkip: prevProps.skip,
        }

        console.table(skip);

        if(skip.propsSkip === skip.stateSkip) {
            this.getPlaylist();
        } else {
            console.log('SAME DATASET.');
        }
    }

    //* HANDLE CHANGING TRACK
    handleClick(e) {
        //* SAVE DATA TO VARIABLE FOR USER IN SET STATE
        const id = e.currentTarget.dataset.id;
        this.setState({current: id})
    }
    
    render() { 
        //* SAVE SHORTER REFERENCE TO TRACKS
        const tracksData = this.state.playlist.tracks;

        return ( 
            <div className="mediaPlayer">
                <h1>{this.state.isLoading ? 'Loading...' : 'Music'}</h1>
                {this.state.isLoading}
                <MediaWindow source={this.state.current}/>
                <Playlist tracks={tracksData} loading={this.state.isLoading} handleClick={this.handleClick} handleSkip={this.props.handleSkip} hasMore={this.state.playlist.hasMore.skip}/>
            </div>
        );
    }
}
 
export default MediaPlayer;