import React from 'react';
import './LabelInput.css';

const LabelInput = props => {
    const { labelName, name } = props;
    return (
        <div className="inputWrapper">
            <label htmlFor={labelName}>{labelName}</label>
            <input id={labelName} name={name}></input>
        </div>
        
    )
}

export default LabelInput;