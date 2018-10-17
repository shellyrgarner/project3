import React from "react";
import "./Hero.css";

const Hero = ({ children }) => (
    <section className="hero">
        <div className="hero-inner">

            {children}
        </div>
    </section>
);

export default Hero;
