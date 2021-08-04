import Head from "next/head";
import Image from "next/image";
import styles from "../styles/LandingPage.module.scss";

export default function LandingPage() {
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
            <button type="button">TAKE THE QUIZ</button>
          </div>
        </div>

        <div className={styles.content}>
          <h3>What we can help with</h3>
          <div className={styles.itemWithImgOnLeft}>
            <h6>HAIR LOSS</h6>
            <p>Hair loss needn’t be irreversible. We can help!</p>
            <p>
              Hair loss needn’t be irreversible. There’s a scientifically proven
              way that’s most effective in keeping and regrowing your hair. It’s
              all to do with blocking a pesky hormone called DHT. That’s the bad
              guy behind hair loss. And you can keep him at bay. The choice is
              yours.
            </p>
          </div>
          <div className={styles.itemWithImgOnRight}>
            <h6>ERECTILE DYSFUNCTION</h6>
            <p>Erections can be a tricky thing. But no need to feel down!</p>
            <p>
              There are plenty of reasons why you might be having difficulty in
              the erection department. We can help you figure out possible
              reasons why. And prescribe a pill if needed.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footerContainer}>
        <div>Footer section</div>
      </footer>
    </div>
  );
}
