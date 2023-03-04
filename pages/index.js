import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import Intro from "../components/Intro/intro";
import About from "../components/About/about";
import Projects from "../components/Projects/projects";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Intro />
      <About />
      <Projects />
    </Layout>
  );
}
