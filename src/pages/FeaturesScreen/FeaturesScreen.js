
import React from 'react';
import "./FeaturesScreen.scss";
import Moola from "../../assets/features/Moola_Market.png"
import Ubeswap from "../../assets/features/Ubeswap.png"
import Unifty from "../../assets/features/Unifty.png"
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
        <article className="featuresScreen">
            <main className="featuresScreen__bannerTitleContainer">
                <section data-aos="fade-down-right" data-aos-duration="1500" className="featuresScreen__bannerTitleContainer__bannerTitle">
                    <h1>Features</h1>
                </section>
                <section className="featuresScreen__featuresOpt">
                    <section data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="option">
                        <img src={Moola} className="featuresImg" alt="Moola_Market" />
                        <h1 className="featureTitle">Moola Market</h1>
                        <p className="featureText">Moola is a democratic algorithmic money market on Celo. Players will be
                        <span className="highlightText"> able to swap game assets </span> 
                        to Celo Native assets and earn interest on deposits.</p>
                    </section>
                    <section data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" className="option">
                        <img src={Ubeswap} className="featuresImg" alt="Ubeswap" />
                        <h1 className="featureTitle">Ubeswap</h1>
                        <p className="featureText">Ubeswap is a Mobile First DEX on Celo. You can 
                        <span className="highlightText"> earn UBE rewards </span> 
                        on Ubeswap Pools and swap assets from Celo Dollar, Celo Euro to game token and vice versa.</p>
                    </section>
                    <section data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="4000" className="option">
                        <img src={Unifty} className="featuresImg" alt="Unifty" />
                        <h1 className="featureTitle">Unifty</h1>
                        <p className="featureText">With Unifty, you can 
                        <span className="highlightText"> Mint, buy, sell, swap, and create game assets </span> 
                        as NFTs and NFT farms with just a few clicks, while you are fully owning your contracts.</p>
                    </section>
                </section>
            </main>
        </article >
    )
}

export default FeaturesScreen
