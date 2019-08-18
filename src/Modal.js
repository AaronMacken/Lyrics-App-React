import React, { Component } from 'react';
import './Modal.css';
import InputForm from './InputForm';

class Modal extends Component {

    render() {
        const {show, close, onSave} = this.props;
        const modalWrapperStyle = {
            visibility: show ? 'visible' : 'hidden',
            transform: show ? 'translate(-50%, -45%)' : 'translate(-50%, -100vh)',
            opacity: show ? '1' : '0'
        }

        return (
            <div>
                <div style={modalWrapperStyle} className="modal-wrapper">

                    <div className="modal-header">
                        <h3>Add New Song</h3>
                        <span className="close-modal-btn" onClick={close}>x</span>
                    </div>


                    <div className="modal-body">
                        <InputForm onSave={onSave}/>
                    </div>


                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={close}>CLOSE</button>
                        <button form="newSongForm" type="submit" className="btn-continue" >Submit</button>
                    </div>


                </div>
            </div>
        )
    }
}

export default Modal;