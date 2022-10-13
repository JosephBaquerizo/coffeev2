import styles from "./about.module.css";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa";
import { BiCoffee } from "react-icons/bi";
import { GiCoffeeCup } from "react-icons/gi";
import { FiCoffee } from "react-icons/fi";
import { MdCoffee } from "react-icons/md";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.content}>
                <span className={styles.title}>Diversity of new coffee-based products!</span>
                <div className={styles.itemContainer}>
                    <div className={styles.item}>
                        <AiOutlineCoffee className={styles.icon} />
                        <span>Espresso</span>
                    </div>
                    <div className={styles.item}>
                        <FaCoffee className={styles.icon} />
                        <span>Latte</span>
                    </div>
                    <div className={styles.item}>
                        <BiCoffee className={styles.icon} />
                        <span>Capuccino</span>
                    </div>
                    <div className={styles.item}>
                        <GiCoffeeCup className={styles.icon} />
                        <span>Machiatto</span>
                    </div>
                    <div className={styles.item}>
                        <FiCoffee className={styles.icon} />
                        <span>Mocha</span>
                    </div>
                    <div className={styles.item}>
                        <MdCoffee className={styles.icon} />
                        <span>Americano</span>
                    </div>
                </div>
            </div>
        </section>
    )
}