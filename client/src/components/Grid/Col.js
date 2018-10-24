import React from "react";

export const Col = ({ classes, size, children }) => (
  <div className={
      size.split(" ").map(size => "col-" + size).join(" ") + " " + classes}>
    {children}
  </div>
);