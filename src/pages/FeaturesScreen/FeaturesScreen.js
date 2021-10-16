
import React from 'react';
import "./FeaturesScreen.scss";
import Moola from "../../assets/features/Moola_Market.png"
import Ubeswap from "../../assets/features/Ubeswap.png"
import Unifty from "../../assets/features/Unifty.png"


const FeaturesScreen = () => {
    return (
        <article className="featuresScreen">
            <main className="featuresScreen__bannerTitleContainer">
                <section className="featuresScreen__bannerTitleContainer__bannerTitle">
                    <h1>Features</h1>
                </section>
                <section className="featuresScreen__bannerTitleContainer__featuresOpt">
                    <section className="option">
                        <img src={Moola} className="featuresImg" alt="Moola_Market" />
                        <h1 className="featureTitle">Moola Market</h1>
                        <p className="featureText">Moola is a democratic algorithmic money market on Celo. Players will be
                        <span className="highlightText"> able to swap game assets </span> 
                        to Celo Native assets and earn interest on deposits.</p>
                    </section>
                    <section className="option">
                        <img src={Ubeswap} className="featuresImg" alt="Ubeswap" />
                        <h1 className="featureTitle">Ubeswap</h1>
                        <p className="featureText">Ubeswap is a Mobile First DEX on Celo. You can 
                        <span className="highlightText"> earn UBE rewards </span> 
                        on Ubeswap Pools and swap assets from Celo Dollar, Celo Euro to game token and vice versa.</p>
                    </section>
                    <section className="option">
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
