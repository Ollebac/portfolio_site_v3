import Image from "next/image";
import styles from "./projects.module.css";
import utilStyles from "../../styles/utils.module.css";
import { useEffect } from "react";

const CreateProject = ({
  projectType,
  projectName,
  projectLanguages,
  projectDescription,
  projectDescription2,
  projectImage,
  projectLink,
  githubLink,
}) => {
  return (
    <div className={styles.project_container}></div>

    // <div className={styles.subproject_container}>
    //   <div className={styles.content_container}>
    //     <h3 className={styles.project_type}>~ {projectType} ~</h3>
    //     <h2 className={styles.project_name}>{projectName}</h2>
    //     <h3 className={styles.project_languages}>{projectLanguages}</h3>
    //     <span>
    //       {projectLink && (
    //         <a href={projectLink} target="blank">
    //           <img
    //             className={styles.project_link}
    //             src="/images/worldweb-logo.png"
    //             alt="web_logo"
    //           />
    //         </a>
    //       )}
    //       {githubLink && (
    //         <a href={githubLink} target="blank">
    //           <img
    //             className={styles.project_link}
    //             src="/images/github-logo.png"
    //             alt="web_logo"
    //           />
    //         </a>
    //       )}
    //     </span>
    //     <p className={styles.project_description}>{projectDescription}</p>
    //     {projectDescription2 && (
    //       <p className={styles.project_description}>{projectDescription2}</p>
    //     )}
    //   </div>
    //   {projectImage && (
    //     <Image
    //       src={projectImage}
    //       className={styles.project_image}
    //       height={500}
    //       width={500}
    //       alt="Project Image"
    //     />
    //   )}
    // </div>
  );
};

// My third iteration of my personal website built with Next.js,
//             Javascript, and CSS, hosted on Vercel. I personally designed and
//             styled this site in Figma after researching UI design through
//             articles, videos, and observation. I Project details in short
//             description and such.

const Projects = () => {
  return (
    <section className={styles.projects_section} id="projects">
      <ul className={styles.all_projects_container}>
        <li className={styles.individual_project_container}>
          <div className={styles.project_image_container}>
            <Image
              src="/images/icon-web-app.svg"
              width={75}
              height={75}
              alt="Web App Logo"
            />
          </div>
          <h3 className={styles.project_name}> Personal Website v3</h3>
          <p className={styles.project_description}>
            My third iteration of my personal website built with Next.js,
            Javascript, and CSS, hosted on Vercel. I personally designed and
            styled this site in Figma after researching UI design through
            articles, videos, and observation. I Project details in short
            description and such.
          </p>
          <ul className={styles.project_languages_container}>
            <li className={styles.project_language}>Next.js</li>
            <li className={styles.project_language}>JavaScript</li>
            <li className={styles.project_language}>HTML</li>
            <li className={styles.project_language}>CSS</li>
            <li className={styles.project_language}>Figma</li>
          </ul>
          <ul className={styles.project_icons_container}>
            <li className={styles.project_icon}>
              <a
                href="https://github.com/Ollebac/portfolio_site_v3"
                target="blank"
              >
                <Image
                  src="/images/icon-github.svg"
                  width={40}
                  height={40}
                  alt="Github Icon"
                />
              </a>
            </li>
            <li className={styles.project_icon}>
              <a href="https://ollebac.dev" target="blank">
                <Image
                  src="/images/icon-internet-white.svg"
                  width={40}
                  height={40}
                  alt="Web Icon"
                />
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.individual_project_container}>
          <div className={styles.project_image_container}>
            <Image
              src="/images/icon-web-app.svg"
              width={75}
              height={75}
              alt="Web App Logo"
            />
          </div>
          <h3 className={styles.project_name}> Personal Website v2</h3>
          <p className={styles.project_description}>
            My second iteration of my personal website built with React,
            JavaScript, HTML, and CSS.
          </p>
          <ul className={styles.project_languages_container}>
            <li className={styles.project_language}>React</li>
            <li className={styles.project_language}>JavaScript</li>
            <li className={styles.project_language}>HTML</li>
            <li className={styles.project_language}>CSS</li>
          </ul>
          <ul className={styles.project_icons_container}>
            <li className={styles.project_icon}>
              <a
                href="https://github.com/Ollebac/portfolio_site_v2"
                target="blank"
              >
                <Image
                  src="/images/icon-github.svg"
                  width={40}
                  height={40}
                  alt="Github Icon"
                />
              </a>
            </li>
            {/* <li className={styles.project_icon}>
              <a href="https://ollebac.dev" target="blank">
                <Image
                  src="/images/icon-internet-white.svg"
                  width={40}
                  height={40}
                  alt="Web Icon"
                />
              </a>
            </li> */}
          </ul>
        </li>
        <li className={styles.individual_project_container}>
          <div className={styles.project_image_container}>
            <Image
              src="/images/icon-web-app.svg"
              width={75}
              height={75}
              alt="Web App Logo"
            />
          </div>
          <h3 className={styles.project_name}> Personal Website v1</h3>
          <p className={styles.project_description}>
            My first iteration of my personal website built with React,
            JavaScript, HTML, and CSS.
          </p>
          <ul className={styles.project_languages_container}>
            <li className={styles.project_language}>React</li>
            <li className={styles.project_language}>JavaScript</li>
            <li className={styles.project_language}>HTML</li>
            <li className={styles.project_language}>CSS</li>
          </ul>
          <ul className={styles.project_icons_container}>
            <li className={styles.project_icon}>
              <a
                href="https://github.com/Ollebac/portfolio_site_v1"
                target="blank"
              >
                <Image
                  src="/images/icon-github.svg"
                  width={40}
                  height={40}
                  alt="Github Icon"
                />
              </a>
            </li>
            {/* <li className={styles.project_icon}>
              <a href="https://ollebac.dev" target="blank">
                <Image
                  src="/images/icon-internet-white.svg"
                  width={40}
                  height={40}
                  alt="Web Icon"
                />
              </a>
            </li> */}
          </ul>
        </li>
        {/* <li className={styles.individual_project_container}>
          <div className={styles.project_image_container}>
            <Image
              src="/images/icon-web-app.svg"
              width={75}
              height={75}
              alt="Web App Logo"
            />
          </div>
          <h3 className={styles.project_name}> Portfolio Site</h3>
          <p className={styles.project_description}>
            Project details in short description and such. We can write a whole
            paragraph here.
          </p>
          <p className={styles.project_description}>
            And even another, if we really want to.
          </p>
          <ul className={styles.project_languages_container}>
            <li className={styles.project_language}>Next.js</li>
            <li className={styles.project_language}>JavaScript</li>
            <li className={styles.project_language}>HTML</li>
            <li className={styles.project_language}>CSS</li>
            <li className={styles.project_language}>Figma</li>
          </ul>
          <ul className={styles.project_icons_container}>
            <li className={styles.project_icon}>
              <a
                href="https://github.com/Ollebac/portfolio_site_v2"
                target="blank"
              >
                <Image
                  src="/images/icon-github.svg"
                  width={40}
                  height={40}
                  alt="Github Icon"
                />
              </a>
            </li>
            <li className={styles.project_icon}>
              <a href="https://ollebac.dev" target="blank">
                <Image
                  src="/images/icon-internet-white.svg"
                  width={40}
                  height={40}
                  alt="Web Icon"
                />
              </a>
            </li>
          </ul>
        </li> */}
      </ul>

      <Image
        src="/images/swipe-right.svg"
        className={styles.swipe_icon}
        width={70}
        height={30}
        alt="Swipe Right Icon"
      />
      <button className={styles.show_more_button}>Show More</button>
      <div className={styles.my_languages_container}>
        <Image
          src="/images/icon-html5.svg"
          className={styles.my_language}
          width={100}
          height={100}
        />
        <Image
          src="/images/icon-javascript.svg"
          className={styles.my_language}
          width={100}
          height={100}
        />
        <Image
          src="/images/icon-react.svg"
          className={styles.my_language}
          width={100}
          height={100}
        />{" "}
        <Image
          src="/images/icon-typescript.svg"
          className={styles.my_language}
          width={100}
          height={100}
        />
        <Image
          src="/images/icon-python.svg"
          className={styles.my_language}
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default Projects;
