import React, { Component } from 'react';
import './InputForm.css';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bandName: "",
            songName: "",
            img: "",
            lyrics: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // function that set's state based off of input values
    // the name for the input must correspond with the state name
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSave({...this.state})
        this.setState({
            bandName: "",
            songName: "",
            img: "",
            lyrics: ""
        });
    }


    render() {
        // variables that point to the current state
        // these variables will correspond with the input component values so react
        // can track the state of the input components
        const { bandName, songName, img, lyrics } = this.state;
        return (
            <form id="newSongForm" onSubmit={this.handleSubmit}>
        
                <div className="inputWrapper">
                    <label htmlFor='bandName'>Band Name</label>
                    <input required id='bandName' name='bandName'
                    value={bandName} autoComplete="off" onChange={this.handleChange}></input>
                </div>

                <div className="inputWrapper">
                    <label htmlFor='songName'>Song Name</label>
                    <input required id='songName' name='songName' 
                    value={songName} autoComplete="off" onChange={this.handleChange}></input>
                </div>

                <div className="inputWrapper">
                    <label htmlFor='img'>Album Art Image URL</label>
                    <input required id='img' name='img' 
                    value={img} autoComplete="off" onChange={this.handleChange}></input>
                </div>

                <div className="inputWrapper">
                    <label htmlFor='lyrics'>Lyrics</label>
                    <textarea required id='lyrics'
                    name='lyrics'
                    style={{width: '20vw', height: '20vh', outline: 'none'}} 
                    value={lyrics} autoComplete="off" onChange={this.handleChange}></textarea>
                </div>
                
            </form>
        )
    }
}

export default InputForm;