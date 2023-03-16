import Image from "next/image";
import styles from "./intro.module.css";
import utilStyles from "../../styles/utils.module.css";

const Intro = () => {
  return (
    <section className={styles.profile_container}>
      <div className={styles.profile_content}>
        <h2 className={styles.profile_h2}>front end developer. designer</h2>
        <h1 className={styles.profile_h1}>
          ian <br className={styles.line_space} /> cabello
        </h1>

        <a
          href="./docs/IanCabelloResume.pdf"
          target="blank"
          className={styles.download_container}
        >
          <span className={styles.download_text}>Download CV</span>

          <Image
            src="/images/icon-download.svg"
            className={styles.download_image}
            height={27}
            width={26}
          />
        </a>
      </div>
      <div className={styles.profile_image_container}>
        <Image
          src="/images/profile-drawing-artist-thiennguyenhue.png"
          className={styles.profile_image}
          height={500}
          width={500}
          alt="Ian Cabello Profile Image"
        />
      </div>
    </section>
  );
};

export default Intro;
