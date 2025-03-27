import React from "react";

import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("images/contact/phoneIcon.png")}
                        alt="Phone icon"
                    />
                    <a href="tel:+66628396593">062-839-6593</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("images/contact/emailIcon.png")}
                        alt="Email icon"
                    />
                    <a href="mailto:praewpan1397@gmail.com">praewpan1397@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("images/contact/githubIcon.png")}
                        alt="Github icon"
                    />
                    <a href="https://github.com/Praewpan1/Portfolio">github.com/Praewpan1/Portfolio</a>
                </li>
            </ul>
        </footer>
    );
}