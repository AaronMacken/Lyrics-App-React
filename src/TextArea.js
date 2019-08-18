import React from 'react';

const TextArea = props => {
    const divStyling = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        margin: '0 auto'
    }
    return (
        <div style={divStyling}>
            <label>Lyrics</label>
            <textarea name={props.name} style={{width: '20vw', height: '20vh', outline: 'none'}}></textarea>
        </div>
    )
}

export default TextArea;