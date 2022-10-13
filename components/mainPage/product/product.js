import styles from "./product.module.css";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import cls from "classnames";

export default function Product() {

    useEffect(() => {
        Aos.init({
            once: true
        })
    }, []);

    return (
        <section id="product" className={styles.product}>
            <div className={styles.title}>
                <span>PRODUCT</span>
            </div>
            <div className={styles.contentContainer}>
                <div data-aos='fade-up' data-aos-delay="250" className={styles.itemContainer}>
                    <div className={cls(styles.item, styles.item1)}>
                        <div className={styles.infoContainerC}>
                            <div className={styles.infoContainer}>
                                <span className={styles.itemTitle}>OUR CLIENTS</span>
                                <span className={styles.itemText}>People who likes to enjoy their coffee to the fullest and obtain the nutritional benefits from this unique natural grain.</span>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button}>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-delay="250" className={cls(styles.item, styles.item2)}>
                        <div className={styles.infoContainerC}>
                            <div className={styles.infoContainer}>
                                <span className={styles.itemTitle}>OUR COFFEE</span>
                                <span className={styles.itemText}>Extracted from the depths of the Ecuadorian forests, carefully selected by our lab experts.</span>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button}>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-delay="500" className={cls(styles.item, styles.item3)}>
                        <div className={styles.infoContainerC}>
                            <div className={styles.infoContainer}>
                                <span className={styles.itemTitle}>OUR PROCESS</span>
                                <span className={styles.itemText}>This product goes through several stages of processing, in order to guarantee the best quality of coffee for our customers.</span>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button}>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}