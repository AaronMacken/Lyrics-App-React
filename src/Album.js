import React, { Component } from 'react';
import './Album.css';

export default class Album extends Component {
    render() {
        const {bandName, img} = this.props;
        return (
            <div className="albumContainer">
                <h2>Album Cover</h2>
                <img alt={`${bandName} album cover`} src={img}></img>
            </div>
        )
    }
}
