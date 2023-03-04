import Image from "next/image";
import styles from "./intro.module.css";
import utilStyles from "../../styles/utils.module.css";

const Intro = () => {
  return (
    <section className={styles.profile_container}>
      <div className={styles.profile_content}>
        <h1 className={styles.profile_h1}>Hi, I'm Ian.</h1>
        <h2 className={styles.profile_h2}>
          Front End / Full Stack Developer.
          <br />
          Designer.
        </h2>
        <p className={utilStyles.standard_text}>
          Currently searching for a remote position in Front End / Full Stack
          Development or onsite in the New York or Charlotte, NC areas.
        </p>
        <p className={utilStyles.standard_text}>
          I will be continuously updating this site with my most recent and
          on-going projects. If you would like to work on something together,
          please get in touch with me{" "}
          <a href="mailto:me@ollebac.dev" className={styles.profile_text_link}>
            via email
          </a>
          .
        </p>
        <div className={styles.profile_buttons_container}>
          {/* <a href="mailto:me@ollebac.dev" className={utilStyles.button_fill}>
            Contact Me
          </a> */}
          <a
            href="./docs/IanCabelloResume.pdf"
            target="blank"
            className={utilStyles.button_fill}
          >
            Download CV
          </a>
        </div>
      </div>
      <Image
        src="/images/profile-drawing-artist-thiennguyenhue.png"
        className={styles.profile_image}
        height={500}
        width={500}
        alt="Ian Cabello Profile Image"
      />
    </section>
  );
};

export default Intro;
