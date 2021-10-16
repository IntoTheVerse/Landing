import React from 'react';
import "./TeamInfoScreen.scss";

import Logo from "../../assets/logo.svg";
import Chain from "../../assets/chain.svg"

import Diamond from "../../assets/teams/diamond.png"
import Naquiyah from "../../assets/teams/Design/Naquiyah.png"
import Piyush from "../../assets/teams/Design/Piyush.png"
import Shovin from "../../assets/teams/Design/Shovin.png"
import Arrow_Left from "../../assets/teams/Arrow_Left.png"
import Arrow_Right from "../../assets/teams/Arrow_Right.png"

const TeamInfoScreen = () => {
    return (
        <section className="teaminfoScreen">
            <main className="teaminfoScreen__bannerTitleContainer">
                <section className="teaminfoScreen__bannerTitleContainer__bannerTitle">
                    <h1>Meet Our Team</h1>
                </section>
                <section className="teaminfoScreen__bannerTitleContainer__Slides">
                    <section className="teaminfoScreen__bannerTitleContainer__Slides__Carousal">
                        <section className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Direction">
                            <img src={Arrow_Left} alt="direction" />
                        </section>
                        <section className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Teams">
                            <img src={Naquiyah} className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Teams__profileImg" alt="profileImg" />
                            <h1 className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Teams__Name">Naquiyah</h1>
                        </section>
                        <section className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Teams">
                            <img src={Piyush} className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Teams__profileImg" alt="profileImg" />
                            <h1 className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Teams__Name">Piyush</h1>
                        </section>
                        <section className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Teams">
                            <img src={Shovin} className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Teams__profileImg" alt="profileImg" />
                            <h1 className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Teams__Name">Shovin</h1>
                        </section>
                        <section className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Direction">
                            <img src={Arrow_Right} alt="direction" />
                        </section>
                        <section className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Banner">
                            <img src={Diamond} className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Banner__diamond" alt="diamond" />
                            <h1 className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Banner__TeamTitle">Design Team</h1>
                            <img src={Diamond} className="teaminfoScreen__bannerTitleContainer__Slides__Carousal__Banner__diamond" alt="diamond" />
                        </section>
                    </section>
                </section>
            </main>
        </section>
    )
}

export default TeamInfoScreen