import React from 'react';
import styled from 'styled-components';
import Playlist from './Playlist';
import MediaWindow from './MediaWindow';
// import Data from '../dummy.json';

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
            currentPage: 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    //* REFACTORED OUT INTO SEPERATE FUNCTION IN ORDER TO REUSE UPON CHANGING SKIP
    getPlaylist() {
         //* GET ALL THE HOT TRACKS
         fetch(`https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot?format=json&skip=${this.props.skip * 20}`)
         .then(res => res.json())
         .then((data) => {
            //  console.log(data.tracks);
             //* SET LOADING BACK TO FALSE AND SET STATE
             this.setState(prevState => {
                return {
                    isLoading: false,
                    playlist: data,
                    currentPage: data.hasMore.skip / 20 - 1
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

        //* WILL LOAD IN 20 TRACKS OF DUMMY DATA
        // this.setState(prevState => {
        //     return {
        //         isLoading: false,
        //         playlist: Data,
        //         currentPage: Data.hasMore.skip / 20 - 1
        //     }
        // })
        // if(this.state.initialLaunch) {
        //     this.setState({
        //         current: Data.tracks[0].eId,
        //         initialLaunch: false
        //     });
        // }
    }

    componentDidMount() {
        //* SET LOADING TO TRUE
        this.setState({isLoading: true});
        this.getPlaylist();
    }

    componentDidUpdate(prevProps, prevState){
        // console.log('HERE COMES THE UPDATE...');
        // console.log(this.props.skip, this.state.currentPage);

        //* ONLY UPDATE IF THE PREVIOUS DATASET IS DIFFERENT FROM THE ONE THIS WOULD REQUEST
        if((this.state.currentPage  !== this.props.skip)) {
            this.getPlaylist();
        } 
        // else {
        //     console.log('SAME DATASET.');
        // }
    }

    //* HANDLE CHANGING TRACK
    handleClick(e) {
        //* SAVE DATA TO VARIABLE FOR USER IN SET STATE
        const id = e.currentTarget.dataset.id;
        this.setState({current: id})
    }

    handleKeyPress(e) {
        if(e.key === 'Enter') {
            const id = e.currentTarget.dataset.id;
            this.setState({current: id})
        }
    }

    StyledH1 = styled.h1`
        font-size: 30px;
    `

    Header = styled.header`
        width: 100%;
        background-color: #282828;
        color: white;
        padding: 10px;
        text-align: center;
    `
    
    render() { 
        //* SAVE SHORTER REFERENCE TO TRACKS
        const tracksData = this.state.playlist.tracks;

        return ( 
            <div className="mediaPlayer">
                <this.Header>
                    <this.StyledH1>{this.state.isLoading ? 'Loading...' : this.props.title}</this.StyledH1>
                </this.Header>
                {this.state.isLoading}
                <MediaWindow source={this.state.current}/>
                <Playlist tracks={tracksData} loading={this.state.isLoading} handleClick={this.handleClick} handleKeyPress={this.handleKeyPress} handleSkip={this.props.handleSkip} currentPage={this.state.currentPage} hasMore={this.state}/>
            </div>
        );
    }
}
 
export default MediaPlayer;