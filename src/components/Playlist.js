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
    text-align: center;
    position: fixed;
    bottom: 0;
    * {
        font-size: 16px;
        width: 33.333%;
    }
`

const NavigationButton = styled.button`
    color: ${props => props.disabled ? '#aaaaaa' : '#ffffff'};
    border: none;
    background-color: transparent;
    transition: font-size 0.1s, background-color 0.25s;
    &:hover:not(:disabled) {
        cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
        font-size: 17px;
    }
    &:hover {
        cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
        background-color: #111111;
    }
    &:focus {
        outline-style: none;
        background-color: #111111;
        font-size: 17px;
    }
`

const StyledPlaylist = styled.section`
    height: 50vh;
    position: relative;
    overflow: scroll;
    padding-bottom: 40px;
`

const StyledPageDisplay = styled.div`
    color: #ffffff;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`

//* PLAYLIST COMPONENT TO BROWSE AVAILABLE MEDIA
const Playlist = props => {
    //* MAP DATA TO COMPONENTS
    const trackComponents = props.tracks.map((track,index)  => <Track key={track._id} id={track.eId} image={track.img} trackName={track.name} username={track.uNm} trackNumber={props.currentPage * 20 + index + 1} handleClick={props.handleClick} handleKeyPress={props.handleKeyPress} index={index}/> )
    return ( 
        <StyledPlaylist className="playlist">
            <ol>
                {props.loading ? 'Loading Tracks...': trackComponents}   
            </ol>
            {!props.loading && 
            <Navigation className="navigation">
                <NavigationButton className="backward" onClick={props.handleSkip} data-skip={Number(props.currentPage - 1)} disabled={props.currentPage === 0} aria-disabled={props.currentPage === 0} tabIndex="22">Back</NavigationButton>
                <StyledPageDisplay>
                    <p>{props.currentPage + 1}</p>
                </StyledPageDisplay>
                <NavigationButton className="forward" onClick={props.handleSkip} data-skip={Number(props.currentPage + 1)} disabled={!props.hasMore} aria-disabled={!props.hasMore} tabIndex="23">Forward</NavigationButton>
            </Navigation>
            }
        </StyledPlaylist>
    );
}
 
export default Playlist;