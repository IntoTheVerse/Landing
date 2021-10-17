import React from 'react';
import HomeScreen from '../HomeScreen/HomeScreen';
import FeaturesScreen from '../FeaturesScreen/FeaturesScreen';
import TeamInfoScreen from '../TeamInfoScreen/TeamInfoScreen';
import Header from '../Header/Header';
import Footer from '../FooterScreen/Footer';

const Landing = () => {
    return (
        <section className="landing_Container">
            <Header />
            <HomeScreen />
            <FeaturesScreen />
            <TeamInfoScreen />
            <Footer />
        </section>
    )
}

export default Landing
