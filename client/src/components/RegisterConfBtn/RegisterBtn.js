import React from "react";

const RegisterBtn = props => (
    <button {...props} style={{  marginBottom: 10 }} className="btn btn-success">
    {props.children}
    </button>
)

export default RegisterBtn;