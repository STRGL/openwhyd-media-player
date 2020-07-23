import React from 'react';
import styled from 'styled-components';
import Track from './Track';

const Navigation = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    height: 40px;
    background-color: #282828;
    * {
        width: 33.333%;
    }
`

const NavigationButton = styled.button`
    color: ${props => props.disabled ? '#262626' : '#ffffff'};
    border: none;
    &:hover {
        cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    }
`

const StyledPlaylist = styled.section`
    height: 50vh;
    position: relative;
    overflow: scroll;
`

const StyledPageDisplay = styled.div`
    color: #ffffff;
`

//* PLAYLIST COMPONENT TO BROWSE AVAILABLE MEDIA
const Playlist = props => {
    //* MAP DATA TO COMPONENTS
    const trackComponents = props.tracks.map((track,index)  => <Track key={track._id} id={track.eId} image={track.img} trackName={track.name} username={track.uNm} trackNumber={props.currentPage * 20 + index + 1} handleClick={props.handleClick}/> )
    return ( 
        <StyledPlaylist className="playlist">
            {props.loading ? 'Loading Tracks...': trackComponents}   
            {!props.loading && 
            <Navigation className="navigation">
                <NavigationButton className="backward" onClick={props.handleSkip} data-skip={Number(props.currentPage - 1)} disabled={props.currentPage === 0}>Back</NavigationButton>
                <StyledPageDisplay>
                    <p>{props.currentPage + 1}</p>
                </StyledPageDisplay>
                <NavigationButton className="forward" onClick={props.handleSkip} data-skip={Number(props.currentPage + 1)} disabled={!props.hasMore}>Forward</NavigationButton>
            </Navigation>
            }
        </StyledPlaylist>
    );
}
 
export default Playlist;