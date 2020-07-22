import React from 'react';
import Playlist from './Playlist';
import MediaWindow from './MediaWindow';

class MediaPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false, 
            tracks: {
                tracks: []
            },
            current: null
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //* SET LOADING TO TRUE
        this.setState({isLoading: true});
        
        //* GET ALL THE HOT TRACKS
        fetch('https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot?format=json&skip=0')
            .then(res => res.json())
            .then((data) => {
                console.log(data.tracks);
                //* SET LOADING BACK TO FALSE AND SET STATE
                this.setState({
                    isLoading: false,
                    tracks: data,
                    current: data.tracks[0].eId
                })
            }).catch(e => {
                //* CATCH ERROR IF TRACKS FAIL TO LOAD
                console.warn(`Failed to load data. Error: ${e}`)
            });
    }

    //* HANDLE CHANGING TRACK
    handleClick(e) {
        //* SAVE DATA TO VARIABLE FOR USER IN SET STATE
        const id = e.currentTarget.dataset.id;
        this.setState(prevState => {
            return {
                current: id
            }
        })
    }
    
    render() { 
        //* SAVE SHORTER REFERENCE TO TRACKS
        const tracksData = this.state.tracks.tracks;

        return ( 
            <div>
                <h1>{this.state.isLoading ? 'Loading...' : 'Music'}</h1>
                {this.state.isLoading}
                <MediaWindow source={this.state.current}/>
                <Playlist tracks={tracksData} loading={this.state.isLoading} handleClick={this.handleClick}/>
            </div>
        );
    }
}
 
export default MediaPlayer;