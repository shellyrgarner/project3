import React from "react";
import "./Hero.css";

const Hero = ({ children, classes, imgClass }) => (
    <section className={`hero ${imgClass} ${classes}`}>
        <div className="hero-inner">

            {children}
        </div>
    </section>
);

export default Hero;
