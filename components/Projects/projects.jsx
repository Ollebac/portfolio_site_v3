import Image from "next/image";
import styles from "./projects.module.css";
import utilStyles from "../../styles/utils.module.css";

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
    <div className={styles.subproject_container}>
      <div className={styles.content_container}>
        <h3 className={styles.project_type}>~ {projectType} ~</h3>
        <h2 className={styles.project_name}>{projectName}</h2>
        <h3 className={styles.project_languages}>{projectLanguages}</h3>
        <span>
          {projectLink && (
            <a href={projectLink} target="blank">
              <img
                className={styles.project_link}
                src="/images/worldweb-logo.png"
                alt="web_logo"
              />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="blank">
              <img
                className={styles.project_link}
                src="/images/github-logo.png"
                alt="web_logo"
              />
            </a>
          )}
        </span>
        <p className={styles.project_description}>{projectDescription}</p>
        {projectDescription2 && (
          <p className={styles.project_description}>{projectDescription2}</p>
        )}
      </div>
      {projectImage && (
        <Image
          src={projectImage}
          className={styles.project_image}
          height={500}
          width={500}
          alt="Project Image"
        />
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section className={styles.projects_container} id="Projects">
      <h1 className={styles.header}>Work Projects</h1>
      <CreateProject
        projectType={"Web App"}
        projectName={"Portfolio Website"}
        projectLanguages={"Next.js, JavaScript, HTML, CSS, Vercel"}
        projectDescription={
          "I designed and developed this portfolio for personal use. I personally styled this site after researching UI design through articles and observation. I also collaborated with multiple illustrators and graphic designers for their contributions to the site."
        }
        projectImage={"/images/watercolor-1.jpg"}
        projectLink={"https://ollebac.dev"}
        githubLink={"https://github.com/Ollebac/portfolio_site_v2"}
      />
      <CreateProject
        projectType={"Discord Bots"}
        projectName={"Elder Drake & Superbot"}
        projectLanguages={"TypeScript, JavaScript, Discord API, Express"}
        projectDescription={
          "Elder Drake: Added functionality to an existing fan-made Discord bot for the game League of Legends. The added functionality allows a user to pass an in-game item as input to the bot. The bot will then parse responses from a complicated and poorly maintained API. A message then displays the item's info to the user."
        }
        projectDescription2={
          "Superbot: Designed and developed a custom Discord bot alongside another developer for a Twitch stream. We utilized agile methodology to get the bot up and running quickly while slowly adding additional functionality, including a user base, queue system, and Twitch integration."
        }
        projectImage={"/images/watercolor-2.jpg"}
        projectLink={""}
        githubLink={
          "https://github.com/Ollebac/elder-drake/tree/new_item_feature"
        }
      />
      <CreateProject
        projectType={"Web App"}
        projectName={"Potionomics Help Page"}
        projectLanguages={"React, JavaScript, HTML, CSS"}
        projectDescription={
          "I just recently started playing a new resource management game called Potionomics, part of the game is creating potions from ingredients that have different stats. The key to creating great potions is balancing the attributes of ingredients. With no true guides out there yet, I wanted to create some simple tools to help players determine what items would best balance the required attributes."
        }
        projectImage={"/images/watercolor-3.jpg"}
        // projectLink={"https://ollebac.dev/Potionomics"}
        githubLink={
          "https://github.com/Ollebac/elder-drake/tree/new_item_feature"
        }
      />
      <p className={styles.projects_closer}>
        For additional mini projects, please see my{" "}
        <a
          href="https://github.com/ollebac"
          className={styles.link}
          target="blank"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
};

export default Projects;
