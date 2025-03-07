import styles from "./Hero.module.css";
import ExampleBackground from "../../../assets/PinkCloudTemp.jpg";

function Hero() {
    return (
        <section className={styles.mainContainer}>
            <img
                src={ExampleBackground}
                alt="Main Background"
                className={styles.mainContainer}
            />
        </section>
    );
}

export default Hero;
