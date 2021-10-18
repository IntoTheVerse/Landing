
import React from 'react';

import "./Header.scss";

import Logo from "../../assets/logo.svg";
import Chain from "../../assets/chain.svg"


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
                            <p onClick={() => scrollTo(".header")}>HOME </p>
                            <p onClick={() => scrollTo(".footerScreen")}>ABOUT</p>
                            <p onClick={() => scrollTo(".featuresScreen")}>FEATURES</p>
                            <p onClick={() => scrollTo(".teaminfoScreen")}>TEAMS</p>
                        </nav>
                    </section>
                </div>
            </header>
        </section >
    )
}

export default Header