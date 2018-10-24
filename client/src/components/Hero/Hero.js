import React from "react";
import "./Hero.css";

const Hero = ({ children, imgClass }) => (
    <section className={`hero ${imgClass}`}>
        <div className="hero-inner">

            {children}
        </div>
    </section>
);

export default Hero;
