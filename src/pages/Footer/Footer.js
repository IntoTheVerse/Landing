import React from 'react';
import "./Footer.scss";

import Top_Cloud from "../../assets/footer/top_cloud.svg"
import Bottom_Cloud from "../../assets/footer/bottom_cloud.svg"
import Character from "../../assets/footer/coming_soon.png"

const Footer = () => {
    return (
        <section className="footerScreen">
            <section className="footerScreen__upperContainer">
                <section className="footerScreen__upperContainer__cloudTop">
                    <img src={Top_Cloud} alt="top cloud" />
                </section>
                <section className="footerScreen__upperContainer__characterContainer">
                    <img src={Character} alt="character" />
                </section>
            </section>
            <img src={Bottom_Cloud} alt="bottom cloud" />
        </section>
    )
}

export default Footer