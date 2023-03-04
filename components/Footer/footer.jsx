import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <ul>
        <li className={styles.footer_header}>Want to get in touch?</li>
        <li className={styles.footer_content}>
          Please send me an email at{" "}
          <a className={styles.footer_links} href="mailto:me@ollebac.dev">
            me@ollebac.dev
          </a>
          .
        </li>
        <li className={styles.footer_content}>
          Artwork on this page was done by{" "}
          <a
            className={styles.footer_links}
            href="https://www.fiverr.com/thiennguyenhue"
          >
            thiennguyenhue
          </a>{" "}
          and{" "}
          <a
            className={styles.footer_links}
            href="https://ollebac.dev/www.fiverr.com/l0a0n0"
          >
            l0a0n0
          </a>
          .
        </li>

        <li className={styles.additional_credits}>
          {"  "} - Additional credits: Watercolor images done by{" "}
          <a
            className={styles.footer_links}
            href="https://www.123rf.com/profile_virtosmedia"
            target="blank"
          >
            virtosmedia
          </a>
          .
        </li>

        <li className={styles.footer_content}>
          Website is designed by me and built with{" "}
          <a
            className={styles.footer_links}
            href="https://nextjs.org/"
            target="blank"
          >
            Next.js
          </a>
          .
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
