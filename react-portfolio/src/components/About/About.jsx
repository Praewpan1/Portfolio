import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/heroImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <div className={styles.textContent}>
          <p className={styles.introText}>
            I am a student passionate about both Frontend and Backend
            development. I enjoy solving complex problems, improving code
            efficiency, and continuously exploring new technologies. I work well
            both independently and in teams to develop creative and efficient
            software solutions.
          </p>
          <div className={styles.documentSection}>
            <div className={styles.aboutItem}>
              <img
                src={getImageUrl("about/resumeIcon.png")}
                alt="Resume icon"
              />
              <div>
                <h3>Resume</h3>
                <a
                  href="/files/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pdfLink}
                >
                  Show
                </a>
              </div>
            </div>
            <div className={styles.aboutItem}>
              <img
                src={getImageUrl("about/TranscriptIcon.png")}
                alt="Transcript icon"
              />
              <div>
                <h3>Transcript</h3>
                <a
                  href="/files/transcript.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pdfLink}
                >
                  Show
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
