import React from 'react';
import './Close.css';
const Close = props => {
    const visibilityStyle = {
        visibility: props.show ? 'visible' : 'hidden'
    }
    return <span style={visibilityStyle} id="close-modal-btn" onClick={() => props.onDelete(props.id)}>x</span>
}

export default Close;