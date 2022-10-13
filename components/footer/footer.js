import styles from "./footer.module.css";

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.itemsContainer}>
                    <div className={styles.item}>
                        <span className={styles.title}>Coffees</span>
                        <ul>
                            <li>
                                <span className={styles.bullet}>Special americano</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Premium espresso</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Kaffee machiatto</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Mystery coffee</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.title}>Locations</span>
                        <ul>
                            <li>
                                <span className={styles.bullet}>First location, street #101</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Second location, street #101</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Third location, street #101</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Fourth location, street #101</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.title}>Community</span>
                        <ul>
                            <li>
                                <span className={styles.bullet}>Blog</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Art gallery</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Recipes</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Recommended guides</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.title}>Merch</span>
                        <ul>
                            <li>
                                <span className={styles.bullet}>Coffee cups</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>T-shirts</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Hoodies</span>
                            </li>
                            <li>
                                <span className={styles.bullet}>Bags</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.crContainer}>
                <span>© Coffee 2022. All Rights Reserved</span>
                <span>Joseph Baquerizo</span>
            </div>
        </section>
    )
}