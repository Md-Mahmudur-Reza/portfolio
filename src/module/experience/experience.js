"use client";
import React, { useState, useEffect } from "react";
import styles from "./experience.module.css";

export default function Experience() {
  const [company, setCompany] = useState("Grahoo");

  const jobObjects = [
    {
      companyName: "Grahoo",
      position: "Jr. Software Engineer",
      workDuration: "August 2022 - July 2023",
      jobDescription: [
        "Designed and implemented responsive user interfaces",
        "Integrated RESTful APIs for data retrieval",
        "Optimized website performance through code refactoring",
      ],
    },
    // {
    //   companyName: "A",
    //   position: "UI/UX Designer",
    //   workDuration: "June 2018 - December 2020",
    //   jobDescription: ["Something 1", "Something 2", "Something 3"],
    // },
    // {
    //   companyName: "GHI Technologies",
    //   position: "Full Stack Developer",
    //   workDuration: "September 2020 - Present",
    //   jobDescription: [
    //     "Developed RESTful APIs using Node.js and Express",
    //     "Implemented database schemas and queries with MongoDB",
    //     "Deployed applications to AWS cloud infrastructure",
    //   ],
    // },
  ];

  const selectCompany = (selectedCompanyName) => {
    setCompany(selectedCompanyName);
  };
  //   useEffect(() => {
  //     console.log(company);
  //   }, [company]);

  const selectedJob = jobObjects.find((obj) => obj.companyName === company);

  return (
    <div className={`${styles.experienceSection}`} id="experience">
      <h1 className={styles.title}>Where I’ve Worked</h1>
      <div className={styles.jobSection}>
        <div className={styles.companySection}>
          {jobObjects.map((obj, index) => (
            <div
              onClick={() => selectCompany(obj.companyName)}
              key={index}
              className={`${styles.company} ${
                obj.companyName === company ? styles.active : ""
              }`}
            >
              {obj.companyName}
            </div>
          ))}
        </div>
        <div className={styles.jobDescriptionSection}>
          {selectedJob && (
            <div>
              <h2 className={styles.position}>{selectedJob.position}</h2>
              <p className={styles.duration}>{selectedJob.workDuration}</p>
              <ul>
                {selectedJob.jobDescription.map((desc, index) => (
                  <li key={index} className={styles.descriptionSection}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
