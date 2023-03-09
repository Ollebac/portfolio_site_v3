import Image from "next/image";
import styles from "./about.module.css";
import utilStyles from "../../styles/utils.module.css";

const About = () => {
  return (
    <section className={styles.about_container} id="About">
      <div className={styles.about_content}>
        <div className={styles.about_text}>
          <h2 className={styles.header}>About Me</h2>
          <div className={utilStyles.spacer}></div>
          <p className={utilStyles.standard_text}>
            In 2017, I started my professional career performing internal, IT
            audits where I used my coding knowledge to enhance control testing
            through code inspection. Moving on further into external audit, I
            began to miss the excitement and thrills of creating things through
            coding. In 2021, I restarted my journey of becoming a developer.
          </p>
          <p className={utilStyles.standard_text}>
            While I do have a formal education in Computer Science, all of my
            web development knowledge and skills are self-taught, driven
            entirely by my desire to create things.
          </p>
          <p className={utilStyles.standard_text}>
            Outside of dev, I enjoy volunteering in the community through
            various ways including helping at the local animal shelter and being
            a volunteer Firefighter. I also love playing games with my friends,
            going to the gym, and spending time with my fiancée and animals (1
            dog and 3 cats)!
          </p>
        </div>

        <Image
          src="/images/animals-drawing-artist-l0a0n0.jpg"
          className={styles.about_image}
          height={500}
          width={500}
          alt="Drawing of my animals by l0a0n0"
        />
      </div>
    </section>
  );
};

export default About;
