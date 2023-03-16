import Head from "next/head";
import Navigation from "../components/Navigation/navigation";
import Intro from "../components/Intro/intro";
import Projects from "../components/Projects/projects";
import About from "../components/About/about";
import Footer from "../components/Footer/footer";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/home.module.css";
import { useEffect } from "react";
import { initOciliator } from "../components/osciliator";

const siteTitle = "Ian Cabello's Portfolio";

export default function Home() {
  useEffect(() => {
    initOciliator(false);
  }, []);

  return (
    <div className={styles.page_background}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <canvas className={utilStyles.cursor} id="cursor"></canvas>
      <Navigation />
      <Intro />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
