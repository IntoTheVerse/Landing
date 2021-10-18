import React from 'react';
import "./TeamInfoScreen.scss";
import Carousel, { autoplayPlugin, slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import Naquiyah from "../../assets/teams/Design/3.png"
import Piyush from "../../assets/teams/Design/2.png"
import Shovin from "../../assets/teams/Design/1.png"
import Elio from "../../assets/teams/Design/5.png"
import Gokul from "../../assets/teams/Design/4.png"
import Ramesh from "../../assets/teams/Design/7.png"
import Rishabh from "../../assets/teams/Design/6.png"
import Sagar from "../../assets/teams/Design/9.png"
import Stanley from "../../assets/teams/Design/8.png"
import Yash from "../../assets/teams/Design/10.png"
import Mitesh from "../../assets/teams/Design/11.png"


import Arrow_Left from "../../assets/teams/Arrow_Left.png"
import Arrow_Right from "../../assets/teams/Arrow_Right.png"

const TeamInfoScreen = () => {
    return (
        <section className="teaminfoScreen">
            <main className="bannerTitleContainer">
                <section className="bannerTitle">
                    <h1>Meet Our Team</h1>
                </section>
                <div className="carousel">
                <Carousel
                    plugins={[
                        'infinite',
                    {
                        resolve: autoplayPlugin,
                        options: {
                        interval: 1500,
                        }
                    },
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                        numberOfSlides: 3,
                        },
                    },
                    {
                        resolve: arrowsPlugin,
                        options: {
                          arrowLeft: <button><img src={Arrow_Left} /></button>,
                          arrowLeftDisabled:<button><img src={Arrow_Left} /></button>,
                          arrowRight: <button><img src={Arrow_Right} /></button>,
                          arrowRightDisabled: <button><img src={Arrow_Right} /></button>,
                          addArrowClickHandler: true,
                        }
                      }

                    ]}   
                    animationSpeed={2000}
                >
                        <div className="image">
                            <img src={Naquiyah} />
                        </div>
                        <div className="image">
                            <img src={Piyush} />
                        </div>
                        <div className="image"> 
                            <img src={Shovin} />  
                        </div>
                        <div className="image"> 
                            <img src={Ramesh} />  
                        </div>
                        <div className="image">
                            <img src={Elio} />
                        </div>
                        <div className="image">
                            <img src={Gokul} />
                        </div>
                        <div className="image">
                            <img src={Sagar} />
                        </div>
                        <div className="image">
                            <img src={Stanley} />
                        </div>
                        {/* <div className="image">
                            <img src={Rishabh} />
                        </div> */}
                        <div className="image">
                            <img src={Yash} />
                        </div>
                        <div className="image">
                            <img src={Mitesh} />
                        </div>
                    </Carousel>
                </div>
            </main>
        </section>
    )
}

export default TeamInfoScreen