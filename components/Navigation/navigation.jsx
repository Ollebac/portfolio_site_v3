import styles from "./navigation.module.css";

function moveScreenAbout() {
  document.getElementById("About").scrollIntoView({ behavior: "smooth" });
}

function moveScreenProjects() {
  document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
}

const Navigation = () => {
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.navlink_container} id="nav_menu">
        <li className={styles.navlink}>
          <a onClick={moveScreenAbout}>About</a>
        </li>

        <li className={styles.navlink}>
          <a onClick={moveScreenProjects}>Projects</a>
        </li>
        <li className={(styles.navlink, styles.hide_mobile)}>
          <a href="./docs/IanCabelloResume.pdf" target="blank">
            Download CV
          </a>
        </li>
        <li className={(styles.navlink, styles.hide_mobile)}>
          <a href="mailto:me@ollebac.dev">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
