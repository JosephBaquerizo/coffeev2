import styles from "./contact.module.css";
import cls from "classnames";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.form}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>CONTACT US</span>
                    <span className={styles.subtitle}>Get in touch with us by filling the following form</span>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputPair}>
                        <div className={styles.item}>
                            <input type="text" className={cls(styles.inputPairItem, styles.input)} placeholder="First Name"/>
                        </div>
                        <div className={styles.item}>
                            <input type="text" className={cls(styles.inputPairItem, styles.input)} placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className={cls(styles.item, styles.bottomItem)}>
                        <input type="text" className={cls(styles.inputEmail, styles.input)} placeholder="Email"/>
                    </div>
                    <textarea className={styles.textarea} placeholder="Tell us about"></textarea>
                    <button className={styles.button}>SEND</button>
                </div>
            </div>
        </section>
    )
}