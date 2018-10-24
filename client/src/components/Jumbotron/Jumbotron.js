import React from "react";

const Jumbotron = ({ fluid, children }) => (
    <div
        className={`jumbotron${fluid ? "-fluid" : ""}`}
    >
        {children}
    </div>
);

export default Jumbotron;