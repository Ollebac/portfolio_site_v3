import Head from "next/head";
import styles from "./layout.module.css";
import Navigation from "../Navigation/navigation";
import Footer from "../Footer/footer";

export const siteTitle = "Ian Cabello's Portfolio";

const Layout = ({ children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.page_background}>
        <div className={styles.page_content}>
          <Head>
            <link rel="icon" href="/images/favicon.gif" />
            <meta
              name="description"
              content="My portfolio site to showcase my projects/skills"
            />
            <meta name="og:title" content={siteTitle} />
          </Head>
          <Navigation />
          <main className={styles.main_container}>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
