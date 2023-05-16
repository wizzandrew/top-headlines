import React from "react";
import footerFacebook from "../img/footer-facebook.png";
import footerBrowser from "../img/footer-browser.png";
import footerInstagram from "../img/footer-instagram.png";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="footerHolder">
      <div className="container footerContainer">
        <div className="row socialHolder">
          <div className="footer-social">
            <h4>Top Headings</h4>
            <div className="footer-social-links">
              <img src={footerFacebook} alt="facebook" />
              <img src={footerBrowser} alt="browser" />
              <img src={footerInstagram} alt="instagram" />
            </div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="footer-info">
            <div className="footer-info-holder">
              <div className="footer-info-element">Terms of use</div>
              <div className="footer-info-element">About us</div>
              <div className="footer-info-element">Privacy Policy</div>
            </div>

            <div className="footer-info-holder">
              <div className="footer-info-element">Cookies</div>
              <div className="footer-info-element">Accessibility Help</div>
              <div className="footer-info-element">Parental Guidance</div>
            </div>

            <div className="footer-info-holder">
              <div className="footer-info-element">Contact the TP</div>
              <div className="footer-info-element">TP emails for you</div>
              <div className="footer-info-element">Advertise with us</div>
            </div>
          </div>
        </div>
        <div className="row footer-copyright col-12">
          <div>
            <span className="copyrightSpan">Copyright © 2023 TH.</span> The Top
            Headings is not responsible for the content of external sites.
          </div>
        </div>
      </div>
    </div>
  );
}
