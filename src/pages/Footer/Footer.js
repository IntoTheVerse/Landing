import React from 'react';
import "./Footer.scss";

import Top_Cloud from "../../assets/footer/top_cloud.svg"
import Bottom_Cloud from "../../assets/footer/bottom_cloud.svg"
import Character from "../../assets/footer/coming_soon.svg"
import Logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <section className="footerScreen">
            <section className="footerScreen__upperContainer">
                <section className="footerScreen__upperContainer__cloudTop">
                    <img src={Top_Cloud} className="cloud" alt="top cloud" />
                </section>
                <section className="footerScreen__upperContainer__characterContainer">
                    <img src={Character} alt="character" />
                </section>
            </section>
            <section className="footerScreen__bottomContainer">
                <img src={Bottom_Cloud} className="footerScreen__bottomContainer__cloud" alt="bottom cloud" />
                <section className="footerScreen__bottomContainer__companyInfo">
                    <img src={Logo} className="footerScreen__bottomContainer__companyInfo__logo" alt="Into The Verse  logo" />
                </section>
            </section>
        </section>
    )
}

export default Footer