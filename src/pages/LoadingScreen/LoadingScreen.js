import React from 'react'
import "./LoadingScreen.scss";
import HelpIcon from '../../assets/icons/help_icon.svg'

const LoadingScreen = () => {
    return (
        <main className="loadingScreen">
            <section className="loadingScreen__main">
                <p>Welcome to </p>
                <div className="loadingScreen__main__title">
                    <h1>Dungeon<br />Hunter</h1>
                </div>
            </section>
            <section className="loadingScreen__tips-tricks">
                <img src={HelpIcon} alt="help_icon" />
                <p>Earn and access defi !</p>
            </section>
        </main>
    )
}

export default LoadingScreen
