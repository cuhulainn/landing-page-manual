import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "./Footer";
import { useWindowSize } from "../hooks/useWindowSize";
import styles from "./LandingPage.module.scss";

//image imports
import hairPull from "../public/img/hair-photo-1-2-x.png";
import intertwinedHands from "../public/img/sex-photo-1-2-x.png";

function LandingPage({ showTheQuiz }) {
  const width = useWindowSize().width;

  return (
    <div className={styles.landingPageContainer}>
      <Head>
        <title>Manual | Landing Page</title>
        <meta name="description" content="How can Manual help you?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.contentContainer}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLogo}></div>
            <h1>BE GOOD </h1>
            <h1>TO YOURSELF</h1>
            <div className={styles.headerText}>
              <p className={`${styles["Text-Style-3"]} ${styles.headerText}`}>
                We’re working around the clock to bring you a holistic approach
                to your wellness. From top to bottom, inside and out.
              </p>
            </div>
            <button type="button" onClick={showTheQuiz}>
              TAKE THE QUIZ
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <h3>What we can help with</h3>
          <div className={styles.itemWithImgOnLeft}>
            <div className={styles.contentContainer}>
              <div className={styles.imageContainer}>
                <Image src={hairPull} alt="Man pulling on his hair" />
              </div>
              <div className={styles.numberContainer}>01</div>
              <div className={styles.textContainer}>
                <h6>HAIR LOSS</h6>
                <p className={styles.subtitle}>
                  Hair loss needn’t be irreversible. We can help!
                </p>
                {width > 760 ? (
                  <p className={styles.description}>
                    Hair loss needn’t be irreversible. There’s a scientifically
                    proven way that’s most effective in keeping and regrowing
                    your hair. It’s all to do with blocking a pesky hormone
                    called DHT. That’s the bad guy behind hair loss. And you can
                    keep him at bay. The choice is yours.
                  </p>
                ) : null}
              </div>
              {width <= 760 ? (
                <div className={styles.descriptionUnderImage}>
                  <p>
                    Hair loss needn’t be irreversible. There’s a scientifically
                    proven way that’s most effective in keeping and regrowing
                    your hair. It’s all to do with blocking a pesky hormone
                    called DHT. That’s the bad guy behind hair loss. And you can
                    keep him at bay. The choice is yours.
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          <div className={styles.itemWithImgOnRight}>
            <div className={styles.contentContainer}>
              <div className={styles.numberContainer}>02</div>
              <div className={styles.imageContainer}>
                <Image src={intertwinedHands} alt="Intertwined hands" />
              </div>
              <div className={styles.textContainer}>
                <h6>ERECTILE DYSFUNCTION</h6>
                <p className={styles.subtitle}>
                  Erections can be a tricky thing. But no need to feel down!
                </p>
                {width > 760 ? (
                  <p className={styles.description}>
                    There are plenty of reasons why you might be having
                    difficulty in the erection department. We can help you
                    figure out possible reasons why. And prescribe a pill if
                    needed.
                  </p>
                ) : null}
              </div>
              {width <= 760 ? (
                <div className={styles.descriptionUnderImage}>
                  <p>
                    There are plenty of reasons why you might be having
                    difficulty in the erection department. We can help you
                    figure out possible reasons why. And prescribe a pill if
                    needed.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
