import React from "react";
import "./services.scss";
import Footer from "../Footer/Footer";
import ServiceSection from "./ServiceSection";

const ServicesHeader = () => {
  return (
    <>
      <div className="services-head">
        <div className="empty-div-pc pc" id="storeHeader">
          <h5>
            {" "}
            Our Telegram channel. You can see all orders here.{" "}
            <a target="_blank" href="https://t.me/umar_rakhmonberdiev">
              <span className="bor-b"> Telegram {">"}</span>
            </a>{" "}
          </h5>
        </div>
        <div className="services">
          <h1>RAZER SERVICES</h1>
          <br />
          <p>
            If you have any questions about our products or Razer.com in
            general, please contact us here.{" "}
          </p>
          <br />
          <br />
          <p>
            If there is any defect or problem with the products supplied by
            Razer.com, please contact us by Email! <br /> And we will give you
            the help we can. If there is any defect or error in our product,{" "}
            <br /> we will provide you with a new product free of charge.
          </p>
          <br />
          <br />
          <p>
            Send us your email address from the input below and write down the
            problem!
          </p>
        </div>
      </div>
      <ServiceSection />
      <div className="razercare">
        <div className="caretexts">
          <h1>RAZERCARE</h1>
          <p>
            Protect your Razer gear with RazerCare—includes extended warranty{" "}
            <br /> that covers both mechanical and electrical issues due to
            normal product usage.
          </p>
          <a href="https://www.razer.com/razercare">Learn More {">"}</a>
        </div>
      </div>
      <div className="razerid">
        <div className="razeridtexts">
          <h1>RAZER ID</h1>
          <p>
            Gain a competitive advantage and leverage on our support, expertise
            and community with your Razer ID. <br /> Integrated with Razer's
            services and software, you can gain access to tons of tools with
            your Razer ID—including <br /> buying the best gamer gear on our
            site, redeeming Razer Silver, saving your personalized configs in
            Synapse, and more.
          </p>
          <a href="https://razerid.razer.com/?_gl=1*tsyh7m*_ga*MTk2NDEwMDQzOC4xNjY1MDQxMzEx*_ga_3TRK53PM75*MTY2NjE3MjAzOS40LjEuMTY2NjE3NDU5OC42MC4wLjA.&_ga=2.119269708.452790095.1666162171-1964100438.1665041311">
            {" "}
            Learn More {">"}
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesHeader;
