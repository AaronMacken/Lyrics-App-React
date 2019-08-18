import React, { Component } from 'react';
import './ModalBackDrop.css';


export default class ModalBackDrop extends Component {
    render() {
        const isShowing = this.props.show;
        if(isShowing) {
            return <div className="back-drop" onClick={this.props.close}></div>
        } else {
            return null;
        }
    }
}


