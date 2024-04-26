import React from "react";
import Image from "next/image";

import brownMan from "../../../public/project/brown_man.jpg";

import styles from "./projects.module.css";

export default function Projects() {
  const projectObj = [
    {
      projectName: "Farm Tech",
      projectType: "Academic Project",
      projectDescription: [
        "A responsive portfolio website showcasing my projects and skills.",
        "Built using React.js and styled with CSS modules.",
        "Includes project descriptions, technologies used, and links.",
      ],
      projectTech: ["Django", "Django Rest Framwork", "React.js"],
      projectLinks: {
        Github: "https://github.com/Md-Mahmudur-Reza/farm_tech_backend",
        LiveDemo: "https://www.google.com",
      },
      projectImage: brownMan,
    },
    {
      projectName: "Brown Man Printing",
      projectType: "Business Project",
      projectDescription: [
        "An online store for selling various products.",
        "Developed using MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Includes features such as product catalog, shopping cart, and user authentication.",
      ],
      projectTech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      projectLinks: {
        Github: "https://github.com/Md-Mahmudur-Reza/print-shop-frontend",
        LiveDemo: "https://brown-man-printing.vercel.app/",
      },
      projectImage: brownMan,
    },
    {
      projectName: "Portfolio",
      projectType: "Personal Project",
      projectDescription: [
        "A web application for managing tasks and projects.",
        "Built using Vue.js and Vuex for state management.",
        "Allows users to create, update, and delete tasks and projects.",
      ],
      projectTech: ["Vue.js", "Vuex"],
      projectLinks: {
        Github: "https://github.com/your-username/task-manager",
        LiveDemo: "https://your-task-manager-app.com",
      },
      projectImage: brownMan,
    },
  ];

  return (
    <div className={`${styles.projectSection}`} id="work">
      <h1 className={styles.title}>My Projects and Researches</h1>
      <div className={styles.innerProjectSection}>
        {projectObj.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.projImageSection}>
              <Image
                className={styles.projImage}
                src={project.projectImage}
                alt={project.projectName}
                width={300}
                height={200}
              />
            </div>
            <div className={styles.projDescriptionSection}>
              <div className={styles.projType}>{project.projectType}</div>
              <h2 className={styles.projTitle}>{project.projectName}</h2>
              <div className={styles.projDesc}>
                {project.projectDescription.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className={styles.projTech}>
                {project.projectTech.join(", ")}
              </div>
              <div className={styles.projLinkSection}>
                {Object.entries(project.projectLinks).map(
                  ([key, value], index) => (
                    <div key={index} className={styles.projLink}>
                      <a href={value} target="_blank" rel="noopener noreferrer">
                        {key}
                      </a>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
