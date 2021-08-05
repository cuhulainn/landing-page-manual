import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/LandingPage.module.scss";
import hairPull from "../public/img/hair-photo-1-2-x.png";
import intertwinedHands from "../public/img/sex-photo-1-2-x.png";
import logo from "../public/img/manual-symblol.png";
import facebook from "../public/img/shape.png";
import twitter from "../public/img/shape_2.png";
import linkedIn from "../public/img/shape_3.png";
import quiz from "../resources/quiz.json";

export default function LandingPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isRejection, setIsRejection] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const questions = quiz.questions;

  const showTheQuiz = () => {
    setShowQuiz(true);
  };

  const handleAnswerOptionClick = (isRejected, value) => {
    //handle case where they chose a "rejection answer"
    if (isRejected) {
      setShowResult(true);
      setIsRejection(true);
    }

    //capture answer and advance to next question/result
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswers({ ...answers, [`answer${currentQuestion}`]: value });
    } else {
      setShowResult(true);
    }
  };

  const handleBackButtonClick = () => {
    const previousQuestion = currentQuestion - 1;
    setCurrentQuestion(previousQuestion);
  };

  return (
    <>
      {showQuiz ? (
        showResult ? (
          <div className={styles.resultContainer}>
            <div className={styles.resultHeader}>
              <h3>Result</h3>
            </div>
            {isRejection ? (
              <div className={styles.resultText}>
                <p>
                  Unfortunately, we are unable to prescribe this medication for
                  you. This is because finasteride can alter the PSA levels,
                  which may be used to monitor for cancer. You should discuss
                  this further with your GP or specialist if you would still
                  like this medication.
                </p>
              </div>
            ) : (
              <div className={styles.resultText}>
                <p className={styles.successText}>
                  Great news! <br /> We have the perfect treatment for your hair
                  loss. Proceed to{" "}
                  <a href="https://www.manual.co">www.manual.co</a>, and prepare
                  to say hello to your new hair!
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.quizContainer}>
            <div className={styles.questionContainer}>
              <div className={styles.questionCount}>
                <span>Question {currentQuestion + 1}</span> of{" "}
                {questions.length}
              </div>
              <div className={styles.questionText}>
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className={styles.answersContainer}>
              {questions[currentQuestion].options.map((option, index) => (
                <div className={styles.answerOptionContainer} key={index}>
                  <button
                    className={`${styles.answerOption} ${
                      option.value === answers[`answer${currentQuestion}`]
                        ? styles.selectedOption
                        : null
                    }`}
                    onClick={() =>
                      handleAnswerOptionClick(option.isRejection, option.value)
                    }
                    key={index}
                  >
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: option.display }}
                    ></div>
                  </button>
                </div>
              ))}
            </div>
            {currentQuestion === 0 ? null : (
              <button
                className={styles.backButton}
                onClick={handleBackButtonClick}
              >
                &#x2039; Back
              </button>
            )}
          </div>
        )
      ) : (
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
                  <p
                    className={`${styles["Text-Style-3"]} ${styles.headerText}`}
                  >
                    We’re working around the clock to bring you a holistic
                    approach to your wellness. From top to bottom, inside and
                    out.
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
                    {/* {TODO: conditionally render below p tag based on viewport size} */}
                    <p className={styles.description}>
                      Hair loss needn’t be irreversible. There’s a
                      scientifically proven way that’s most effective in keeping
                      and regrowing your hair. It’s all to do with blocking a
                      pesky hormone called DHT. That’s the bad guy behind hair
                      loss. And you can keep him at bay. The choice is yours.
                    </p>
                  </div>
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
                    {/* {TODO: conditionally render below p tag based on viewport size} */}
                    <p className={styles.description}>
                      There are plenty of reasons why you might be having
                      difficulty in the erection department. We can help you
                      figure out possible reasons why. And prescribe a pill if
                      needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>

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
        </div>
      )}
    </>
  );
}
