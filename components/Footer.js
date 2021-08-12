import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";

//image imports
import logo from "../public/img/manual-symblol.png";
import facebook from "../public/img/shape.png";
import twitter from "../public/img/shape_2.png";
import linkedIn from "../public/img/shape_3.png";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.footerLogo}>
          <Image src={logo} alt="logo" height="60vh" width="60vh"></Image>
        </div>
        <div className={styles.navLinksContainer}>
          <div className={styles.navLinksColumn}>
            <h6>PRODUCT</h6>
            <p>Popular</p>
            <p>Trending</p>
            <p>Guided</p>
            <p>Products</p>
          </div>
          <div className={styles.navLinksColumn}>
            <h6>COMPANY</h6>
            <p>Press Releases</p>
            <p>Mission</p>
            <p>Strategy</p>
            <p>About</p>
          </div>
          <div className={styles.navLinksColumn}>
            <h6>INFO</h6>
            <p>Support</p>
            <p>Customer Service</p>
            <p>Get Started Guide</p>
          </div>
          <div className={styles.socialLinksColumn}>
            <h6>FOLLOW US</h6>
            <div className={styles.socialLinkImageContainer}>
              <Image alt="Facebook Logo" src={facebook} />
              <Image alt="Twitter Logo" src={twitter} />
              <Image alt="LinkedIn Logo" src={linkedIn} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>
      <div className={styles.copyright}>
        <span>© 2019 Manual. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
