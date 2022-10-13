import styles from "./header.module.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import cls from "classnames";

export default function Header() {

    const [sidebar, setSidebar] = useState(true);

    const handleClick = () => {
        setSidebar(current => !current);
    }

    return (
        <section className={styles.header}>
            <div className={styles.logoContainer}>
                <span>Coffee</span>
            </div>
            <div className={sidebar ? cls(styles.navContainer, styles.active) : styles.navContainer}>
                <ul>
                    <li>
                        <a href="#home">
                            <div className={styles.item}>
                                <span>HOME</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <div className={styles.item}>
                                <span>ABOUT</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#product">
                            <div className={styles.item}>
                                <span>PRODUCT</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            {
                sidebar
                ?
                <AiOutlineClose className={styles.icon} onClick={handleClick} />
                :
                <FiMenu className={styles.icon} onClick={handleClick} />
            }
        </section>
    )
}