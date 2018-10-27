import React from 'react';

const InputBox = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <br/>
        <input type={props.type || "text"} className="form-control validate" name={props.name} value={props.value} onChange={props.onChange} />
    </div>
);

export default InputBox;