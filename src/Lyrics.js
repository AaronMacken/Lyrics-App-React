import React, {Component} from 'react';
import './Lyrics.css';

export default class Lyrics extends Component {
    render(){
        const {lyrics} = this.props;
        return(
            <div className="lyricsContainer">
                <h2>Lyrics</h2>
                <p>{lyrics}</p>
            </div>
        )
    }
}

