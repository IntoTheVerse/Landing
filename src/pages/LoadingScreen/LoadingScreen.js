import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import "./LoadingScreen.scss";

import HelpIcon from '../../assets/icons/help_icon.svg'

const loadingtime = 2500


const LoadingScreen = () => {
    let history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push("/home");
        }, loadingtime);
        // eslint-disable-line react-hooks/exhaustive-deps
    }, [])
    return (
        <main className="loadingScreen">
            <section className="loadingScreen__main">
                <p>Welcome to </p>
                <div className="loadingScreen__main__title">
                    <h1>Dungeon<br />Hunt</h1>
                </div>
            </section>
            <section className="loadingScreen__tips-tricks">
                <img src={HelpIcon} alt="help_icon" />
                <p>Play Earn Win!</p>
            </section>
        </main>
    )
}

export default LoadingScreen
