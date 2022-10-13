import styles from "./experience.module.css";
import cls from "classnames";

export default function Experience() {
    return (
            <div className={styles.slider}>
                <div className={styles.content}>
                    <span className={styles.title}>WE ARE EXPERIENCE</span>
                    <button className={styles.button}>DISCOVER MORE HERE</button>
                </div>
                <div className={styles.sliderTrack}>
                    <div className={cls(styles.slide, styles.img1)}>
                    </div>
                    <div className={cls(styles.slide, styles.img2)}>
                    </div>
                    <div className={cls(styles.slide, styles.img3)}>
                    </div>
                    <div className={cls(styles.slide, styles.img4)}>
                    </div>
                    <div className={cls(styles.slide, styles.img5)}>
                    </div>
                    <div className={cls(styles.slide, styles.img6)}>
                    </div>

                    {/* same slides*/}

                    <div className={cls(styles.slide, styles.img1)}>
                    </div>
                    <div className={cls(styles.slide, styles.img2)}>
                    </div>
                    <div className={cls(styles.slide, styles.img3)}>
                    </div>
                    <div className={cls(styles.slide, styles.img4)}>
                    </div>
                    <div className={cls(styles.slide, styles.img5)}>
                    </div>
                    <div className={cls(styles.slide, styles.img6)}>
                    </div>
                </div>
            </div>
    )
}