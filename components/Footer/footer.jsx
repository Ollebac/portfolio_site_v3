import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <h3 className={styles.header}>Get In Touch</h3>
      <p className={styles.contact_text}>
        I am currently searching for a remote position in Front End / Full Stack
        Development or onsite in the New York or Charlotte, NC areas. Please
        feel free to reach out if you would like to work together or if you have
        any questions and I’ll get back to you as soon as I can!
      </p>
      <a href="mailto:iancabello16@gmail.com" className={styles.email_button}>
        Email Me
      </a>
      <h4 className={styles.built_text}>Designed and Built by Ian Cabello</h4>
    </footer>
  );
};

export default Footer;
