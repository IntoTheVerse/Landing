
import React from 'react';

import "./Header.scss";

import Logo from "../../assets/logo.svg";
import Chain from "../../assets/chain.svg"
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {
    const scrollTo = (ele_class) => {
        document.querySelector(ele_class).scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <section className="header">
            <header className="homeScreen__header">
                <div className="homeScreen__header__content">
                    <section className="homeScreen__header__chainContainer">
                        <img src={Chain} alt="" />
                        <img src={Chain} alt="" />
                    </section>
                    <section className="homeScreen__header__main">
                        <img src={Logo} alt="logo" />
                        <nav className="homeScreen__header__main__nav">
                            <p><Link className="nav-item" activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={2000} delay={100}>HOME</Link></p>
                            <p><Link className="nav-item" activeClass="active" to="featuresScreen" spy={true} smooth={true} offset={0} duration={2000} delay={100}>FEATURES</Link></p>
                            <p><Link className="nav-item" activeClass="active" to="teamInfoScreen" spy={true} smooth={true} offset={0} duration={2000} delay={100}>TEAMS</Link></p>
                            <p><Link className="nav-item" activeClass="active" to="footerScreen" spy={true} smooth={true} offset={0} duration={2000} delay={100}>ABOUT</Link></p>

                        </nav>
                    </section>
                </div>
            </header>
        </section >
    )
}

export default Header