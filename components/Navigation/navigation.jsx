import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav className={styles.nav_container}>
        <ul className={styles.nav_content} id="nav_menu">
          <li className={styles.navlink}>
            <a href="/#projects">Projects</a>
          </li>

          <li className={styles.navlink}>
            <a href="/#about">About</a>
          </li>
          <li className={styles.navlink}>
            <a href="mailto:me@ollebac.dev">Contact</a>
          </li>
          <li className={styles.resume_button}>
            <a href="./docs/IanCabelloResume.pdf" target="blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
