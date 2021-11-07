
import React from 'react';
import "./FeaturesScreen.scss";
import Ubeswap from "../../assets/features/Ubeswap.png"
import Metaverse_Map from "../../assets/features/Metaverse Map.png"
import Dungeon_Game from "../../assets/features/Game.gif"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});

const FeaturesScreen = () => {
    return (
        <article className="featuresScreen" id="featuresScreen">
            <main className="featuresScreen__bannerTitleContainer">
                <section data-aos="fade-down-right" data-aos-duration="1500" className="featuresScreen__bannerTitleContainer__bannerTitle">
                    <h1>Features</h1>
                </section>
                <section className="featuresScreen__featuresOpt">
                    <section data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="option">
                        <img src={ Metaverse_Map } className="featuresImg" alt="Into The Verse" />
                        <h1 className="featureTitle">Metaverse</h1>
                        <p className="featureText">Pixel Parallel Universe where you can connect with your friends with
                        <span className="highlightText"> Play to Earn Games, DeFi and NFTs </span> 
                        only on the Celo Blockchain.</p>
                    </section>
                    <section data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" className="option">
                        <img src={ Dungeon_Game } className="featuresImg" alt="Dungeon Hunt Game" />
                        <h1 className="featureTitle">Dungeon Hunt Game</h1>
                        <p className="featureText">A complete suite of RPG game with
                        <span className="highlightText"> story modes, weekly challenges and 1v1 battels </span> 
                        along with the ablity to switch between the game charactes that are NFTs.</p>
                    </section>
                    <section data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="4000" className="option">
                        <img src={ Ubeswap } className="featuresImg" alt="Ubeswap" />
                        <h1 className="featureTitle">DeFi</h1>
                        <p className="featureText">Into The Verse provides you the opportunity to interact with DeFi protocols like
                        <span className="highlightText"> Ubeswap, Moola Market and NFT Marketplace </span> 
                        in a gamified experience</p>
                    </section>
                </section>
            </main>
        </article >
    )
}

export default FeaturesScreen
