import styles from "./main.module.css";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Main() {

    useEffect(() => {
        Aos.init({
            once: true
        })
    }, []);

    return (
        <section id="home" className={styles.main}>
            <div data-aos='fade-up' className={styles.content}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Premium Quality Coffee</span>
                </div>
                <div className={styles.subtitleContainer}>
                    <span className={styles.subtitle}>From the fields to your cup</span>
                </div>
                <a href="#contact"><button className={styles.button}>CONTACT US</button></a>
            </div>
            <div className={styles.shapeDivider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
                </svg>
            </div>
            <div className={styles.videoOpacity}></div>
            <video className={styles.videoBg} autoPlay loop muted src={"/main_video.mp4"} />
        </section>
    )
}