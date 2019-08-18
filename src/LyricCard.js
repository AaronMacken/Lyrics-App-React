import React, { Component } from 'react';
import './LyricCard.css';
import Album from './Album';
import Lyrics from './Lyrics';
import Close from './Close';

export default class LyricCard extends Component {
    render() {

        const { id, bandName, songName, img, lyrics, show, onDelete } = this.props;

        return (
            <div className="container">
                <div className="containerHeader">
                    <h1>{bandName} - {songName}</h1>
                    <Close show={show} onDelete={onDelete} id={id} />
                </div>


                <div className="containerBody">
                    <Album bandName={bandName} img={img} />
                    <Lyrics lyrics={lyrics} />
                </div>
            </div>
        )
    }
}

