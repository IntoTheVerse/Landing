
import React from 'react';
import "./HomeScreen.scss";

import Logo from "../../assets/logo.svg";
import Chain from "../../assets/chain.svg"


//highr number cloud is closer to the center of screen
import CloudRightOne from "../../assets/clouds/cloud_right_one.svg"
import CloudRightTwo from "../../assets/clouds/cloud_right_two.svg"
import CloudRightThree from "../../assets/clouds/cloud_right_three.svg"
import CloudLeftOne from "../../assets/clouds/cloud_left_one.svg"
import CloudLeftTwo from "../../assets/clouds/cloud_left_two.svg"


const HomeScreen = () => {
    return (
        <article className="homeScreen">
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
                            <p>AbOUT</p>
                            <p>FEATURES</p>
                            <p>TEAMS</p>
                        </nav>
                    </section>
                </div>
            </header>
            <main className="homeScreen__bannerTitleContainer">
                <section className="homeScreen__bannerTitleContainer__bannerTitle">
                    <h1>A PiXEL EXPERiENCE</h1>
                    <h1>PLAY, COLLECT and EARN</h1>
                </section>
                <img src={CloudLeftOne} className="cloud cloud_left_one" alt="cloud_left_one" />
                <img src={CloudLeftTwo} className="cloud cloud_left_two" alt="cloud_left_two" />
                <img src={CloudRightOne} className="cloud cloud_right_one" alt="cloud_right_one" />
                <img src={CloudRightTwo} className="cloud cloud_right_two" alt="cloud_right_two" />
                <img src={CloudRightThree} className="cloud cloud_right_three" alt="cloud_right_three" />
            </main>
        </article >
    )
}

export default HomeScreen
