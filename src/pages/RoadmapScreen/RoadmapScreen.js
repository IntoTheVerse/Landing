import React from "react";
import "./RoadmapScreen.scss";
import Moola from "../../assets/features/Moola_Market.png";
import Ubeswap from "../../assets/features/Ubeswap.png";
import Unifty from "../../assets/features/Unifty.png";
import AOS from "aos";
import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
import {
  FaBug,
  FaRegCalendarCheck,
  FaRegFileAlt,
  FaArrowCircleRight,
} from "react-icons/fa";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const RoadmapScreen = () => {
  return (
    <article className="roadmapScreen" id="roadmapScreen">
      <main className="roadmapScreen__bannerTitleContainer">
        <section
          data-aos="fade-down-right"
          data-aos-duration="1500"
          className="roadmapScreen__bannerTitleContainer__bannerTitle"
        >
          <h1>Roadmap</h1>
        </section>
        <section className="roadmapScreen__featuresOpt">
          <Timeline minEvents={4} placeholder className="text-white">
            <TimelineEvent
              color="#67C71C"
              icon={FaArrowCircleRight}
              title={
                <div className="text-white mt-4 text-xl">
                  <b>(Sep-Nov, 2021)</b>
                </div>
              }
              subtitle={
                <div className="text-white flex flex-col mt-1">
                  <div>Level 1 P2E Game</div>
                  <div>+</div>
                  <div>V1 Metaverse launch</div>
                  <div>+</div>
                  <div>NFT Marketplace</div>
                </div>
              }
              action={{
                label: (
                  <div className="text-white flex flex-col">
                    <b>MVP Launch</b>
                    <div>Token Launch on Ubeswap</div>
                  </div>
                ),
              }}
            />
            <TimelineEvent
              color="#078DC7"
              icon={FaBug}
              title={
                <div className="text-white mt-4 text-xl">
                  <b>(Dec, 2021)</b>
                </div>
              }
              subtitle={
                <div className="text-white flex flex-col mt-1">
                  <div>New Game Levels</div>
                  <div>+</div>
                  <div>Character Development</div>
                </div>
              }
              action={{
                label: (
                  <div className="text-white flex flex-col">
                    <div>Expand Metaverse</div>
                  </div>
                ),
              }}
            />
            <TimelineEvent
              color="#472383"
              icon={FaRegCalendarCheck}
              subtitle={
                <div className="text-white flex flex-col mt-1">
                  <div>Token Farms</div>
                  <div>+</div>
                  <div>1v1 Battle Mode</div>
                </div>
              }
              title={
                <div className="text-white mt-4 text-xl">
                  <b>Q1, 2022</b>
                </div>
              }
              action={{
                label: (
                  <div className="text-white flex flex-col">
                    <div>NFT Presale</div>
                  </div>
                ),
              }}
            />
            <TimelineEvent
              color="#472383"
              icon={FaRegCalendarCheck}
              title={
                <div className="text-white mt-4 text-xl">
                  <b>Q3, 2022</b>
                </div>
              }
              subtitle={
                <div className="text-white flex flex-col mt-1">
                  <div>AR Integration</div>
                  <div>+</div>
                  <div>Programmable NFTs</div>
                </div>
              }
              action={{
                label: (
                  <div className="text-white flex flex-col">
                    <div>Mobile Wallet</div>
                  </div>
                ),
              }}
            />
          </Timeline>
        </section>
      </main>
    </article>
  );
};

export default RoadmapScreen;
