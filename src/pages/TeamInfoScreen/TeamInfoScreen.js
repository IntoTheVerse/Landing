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



const TeamInfoScreen = () => {
    return (
      <section className="teaminfoScreen" id="teamInfoScreen">
        <main className="bannerTitleContainer">
          <section
            data-aos="fade-down-right"
            data-aos-duration="1500"
            className="bannerTitle"
          >
            <h1>Meet Our Team</h1>
          </section>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-linear"
            className="carousel"
          >
            <Carousel
              plugins={[
                "infinite",
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 1500,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button>
                        <img
                          className="h-20 md:h-28 lg:h-36"
                          src={Arrow_Left}
                        />
                      </button>
                    ),
                    arrowLeftDisabled: (
                      <button>
                        <img
                          className="h-20 md:h-28 lg:h-36"
                          src={Arrow_Left}
                        />
                      </button>
                    ),
                    arrowRight: (
                      <button>
                        <img
                          className="h-20 md:h-28 lg:h-36"
                          src={Arrow_Right}
                        />
                      </button>
                    ),
                    arrowRightDisabled: (
                      <button>
                        <img
                          className="h-20 md:h-28 lg:h-36"
                          src={Arrow_Right}
                        />
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
              animationSpeed={3000}
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
              <div className="image">
                <img src={Rishabh} />
              </div>
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
    );
}

export default TeamInfoScreen