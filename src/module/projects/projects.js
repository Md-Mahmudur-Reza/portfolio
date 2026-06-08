import React from "react";
import Image from "next/image";

import khaodao from "../../../public/project/khaodao.png";
import brownMan from "../../../public/project/brown_man.png";
import farmtech from "../../../public/project/farmtech.jpeg";
import portfolio from "../../../public/project/portfolio.png";

import styles from "./projects.module.css";

export default function Projects() {
  const projectObj = [
    {
      projectName: "KhaoDao",
      projectType: "Work Project",
      projectDescription: [
        "KhaoDao is a popular online food and grocery delivery platform. Through its mobile app or website, you can browse local restaurant menus, place an order, and have it delivered directly to your door by an independent driver",
      ],
      projectTech: [
        "Django",
        "Django Rest Framwork",
        "NextJS",
        "PostgreSQL",
        "RestAPI",
        "GraphQL",
        "TailwindCSS"
      ],
      projectLinks: {
        // Github: "https://github.com/Md-Mahmudur-Reza/farm_tech_backend",
        Website: "https://khaodao.com/",
      },
      projectImage: khaodao,
    },
    {
      projectName: "Farm Tech",
      projectType: "Academic Project",
      projectDescription: [
        "A collaborative plateform that connects landowners with farmers, optimizes crop selection using data analytics, and reduces crops waste by providing Digital Storage Solution in Canadian agriculture.",
      ],
      projectTech: [
        "Django",
        "Django Rest Framwork",
        "React.js",
        "PostgreSQL",
        "Random Forest",
      ],
      projectLinks: {
        Github: "https://github.com/Md-Mahmudur-Reza/farm_tech_backend",
        // Website: "https://www.google.com",
      },
      projectImage: farmtech,
    },
    {
      projectName: "Brown Man Printing",
      projectType: "Business Project",
      projectDescription: [
        "An online printing website to order for printing documents",
      ],
      projectTech: ["NextJS"],
      projectLinks: {
        Github: "https://github.com/Md-Mahmudur-Reza/print-shop-frontend",
        Website: "https://brown-man-printing.vercel.app/",
      },
      projectImage: brownMan,
    },
    {
      projectName: "Portfolio",
      projectType: "Personal Project",
      projectDescription: ["My portfolio website"],
      projectTech: ["NexjJS"],
      projectLinks: {
        Github: "https://github.com/Md-Mahmudur-Reza/portfolio",
        Website: "https://md-mahmudur-reza.vercel.app/",
      },
      projectImage: portfolio,
    },
  ];

  return (
    <div className={`${styles.projectSection}`} id="work">
      <h1 className={styles.title}>My Projects and Contributions</h1>
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
