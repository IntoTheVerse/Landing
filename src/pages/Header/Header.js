
import React from 'react';

import "./Header.scss";

import Logo from "../../assets/logo.svg";
import Chain from "../../assets/chain.svg"


const Header = () => {
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
                            <p>HOME</p>
                            <p>ABOUT</p>
                            <p>FEATURES</p>
                            <p>TEAMS</p>
                        </nav>
                    </section>
                </div>
            </header>
        </section >
    )
}

export default Header