import React from "react";
import Head from "next/head";
import styles from "./Results.module.scss";

function Results({ isRejection }) {
  return (
    <>
      <Head>
        <title>Manual | Can we help? Results</title>
        <meta name="description" content="How can Manual help you?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.resultContainer}>
        <div className={styles.resultHeader}>
          <h3>Result</h3>
        </div>
        {isRejection ? (
          <div className={styles.resultText}>
            <p>
              Unfortunately, we are unable to prescribe this medication for you.
              This is because finasteride can alter the PSA levels, which may be
              used to monitor for cancer. You should discuss this further with
              your GP or specialist if you would still like this medication.
            </p>
          </div>
        ) : (
          <div className={styles.resultText}>
            <p className={styles.successText}>
              Great news! <br /> We have the perfect treatment for your hair
              loss. Proceed to <a href="https://www.manual.co">www.manual.co</a>
              , and prepare to say hello to your new hair!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Results;
