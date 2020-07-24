import React from 'react';
import styled from "styled-components";


const Image = styled.img`
    width: 50px;
    height: 50px;
`
const Container = styled.li`
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #131313;
    opacity: 1;
    transition: background-color 0.25s, color 0.25s; 
    font-size: 16px;
    * {
        margin-right: 15px;
    }

    &:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,0.7);
    }
    &:focus {
        background-color: rgba(0,0,0,0.7);
        outline-style: none;
    }
`

const DetailsDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    p:last-child {
        opacity: 0.6;
    }
    *{
        margin-bottom: 5px;
    }
`

const Track = props => {
    return (  
        <Container data-id= {props.id} onClick={props.handleClick} onKeyPress={props.handleKeyPress} className="track" color={props.trackNumber % 2} tabIndex={props.index + 2}>
            <p className="trackNumber">{props.trackNumber}</p>
            <Image className="trackImage" src={props.image} alt={`${props.trackName} artwork`} />
            <DetailsDiv className="details">
                <p className="trackName">{props.trackName}</p>
                <p className="username">{props.username}</p>
            </DetailsDiv>
        </Container>
    );
}
 
export default Track;