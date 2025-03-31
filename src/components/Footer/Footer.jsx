import React from "react";
import "./Footer.scss";
import BackgroundSVG from "./butterfly.svg";
import FacebookIcon from "./facebook.svg";
import InstagramIcon from "./instagram.svg";
import TwitterIcon from "./x.svg";
import LinkedinIcon from "./linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <img src={BackgroundSVG} alt="Footer background" />
      </div>
      <div className="footer-top">
        <div className="footer-col contact">
          <h3>Contact</h3>
          <p>
            3a, John Obasi Kalu Close, Behind Ocean Crest
            <br /> School, Oniru Lekki, Lagos, Nigeria
          </p>
          <p>+234 1295 2104, +234 808 935 5432</p>
          <p>9am - 6pm (Weekdays), 10am - 3pm (Saturdays)</p>
          <p>hello@acadamier.com</p>
          <div className="social-links">
            <img src={FacebookIcon} alt="Facebook" />
            <img src={InstagramIcon} alt="Instagram" />
            <img src={TwitterIcon} alt="Twitter" />
            <img src={LinkedinIcon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-col explore">
          <h3>Explore</h3>
          <div className="explore-grid">
            <ul>
              <li>Start Here</li>
              <li>For Instructors</li>
              <li>Acadamier Blog</li>
              <li>Acadamier Forum</li>
              <li>Free Classes</li>
              <li>Verify Certificate</li>
            </ul>
            <ul>
              <li>Learning Path</li>
              <li>For Individual</li>
              <li>For Team</li>
              <li>Featured Courses</li>
              <li>Help and Support</li>
            </ul>
          </div>
        </div>
        <div className="footer-col company">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="footer-col language">
          <button className="language-btn">English</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2021 The English Manner Nigeria | Built by DukeMarvel</p>
      </div>
    </footer>
  );
}

export default Footer;