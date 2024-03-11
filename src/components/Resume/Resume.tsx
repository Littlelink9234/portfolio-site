import "../../index.css";
import "./Resume.css";

import { FC } from "react";

const Resume: FC = () => {
  return (
    <section id="resume" className="s-resume target-section">
      <div className="row s-resume__section">
        <div className="column large-3 tab-12">
          <h3 className="section-header-allcaps">Career</h3>
        </div>
        <div className="column large-9 tab-12">
          <div className="resume-block">
            <div className="resume-block__header">
              <h4 className="h3">InfoTrack</h4>
              <p className="resume-block__header-meta">
                <span>Software Engineer</span>
                <span className="resume-block__header-date">
                  June 2023 - Present
                </span>
              </p>
            </div>

            <p>
              Develop and maintain applications tailored for the legal-tech
              market. Integrate with 3rd party case management systems and
              support existing workflows. Manage collection of tools to
              streamline court-case process and maximize efficiency by reducing
              reduntant tasks.
            </p>
          </div>

          <div className="resume-block">
            <div className="resume-block__header">
              <h4 className="h3">Willis Towers Watson</h4>
              <p className="resume-block__header-meta">
                <span>Software Developer</span>
                <span className="resume-block__header-date">
                  June 2019 - March 2023
                </span>
              </p>
            </div>

            <p>
              Supervise all facets of software development including
              requirements gathering, code deployments, and technical
              documentation creation. Train and upskill employees on technical
              aspects as well as policies/procedures of the team. Manage suite
              of risk tools to measure corporation's risk portfolio. Coordinate
              with Stakeholders, Analysts, and QA Engineers to increase
              efficiency of project workflow. Develop and improve new/existing
              applications, expand technology platforms, and address client
              needs. Enhance shared projects by transforming specific components
              for more flexibility. Orchestrate knowledge-sharing sessions to
              strengthen the knowledge base of technology team.
            </p>
          </div>
        </div>
      </div>

      <div className="row s-resume__section">
        <div className="column large-3 tab-12">
          <h3 className="section-header-allcaps">Education</h3>
        </div>
        <div className="column large-9 tab-12">
          <div className="resume-block">
            <div className="resume-block__header">
              <h4 className="h3">CUNY Queens, City University of New York</h4>
              <p className="resume-block__header-meta">
                <span>B.A. in Computer Science</span>
                <span className="resume-block__header-date">May 2010</span>
              </p>
            </div>

            <p>
              Focus studies on higher level Computer Science courses. Interests
              in the study of Bioinformatics and Quantum Computing.
            </p>
          </div>

          <div className="resume-block">
            <div className="resume-block__header">
              <h4 className="h3">Nassau Community College</h4>
              <p className="resume-block__header-meta">
                <span>A.S. in Computer Science</span>
                <span className="resume-block__header-date">May 2008</span>
              </p>
            </div>

            <p>
              Focus studies on mathematic, science and lower level computer
              science courses.
            </p>
          </div>
        </div>
      </div>

      <div className="row s-resume__section">
        <div className="column large-3 tab-12">
          <h3 className="section-header-allcaps">Skills</h3>
        </div>
        <div className="column large-9 tab-12">
          <div className="resume-block">
            <p>
              I'm a Full Stack Software Developer so my toolset ranges from
              robust code editors to database management tools to deployment
              orchestrators.
            </p>

            <ul className="skill-bars-fat">
              <li>
                <div className="progress percent85"></div>
                <strong>Web (HTML, CSS, JS/JS Frameworks)</strong>
              </li>
              <li>
                <div className="progress percent85"></div>
                <strong>
                  Databases (MS Sql Server, MongoDb, Firebase, Cosmos Db)
                </strong>
              </li>
              <li>
                <div className="progress percent80"></div>
                <strong>
                  OS (Microsoft Windows, Windows Server, Linux, Unix)
                </strong>
              </li>
              <li>
                <div className="progress percent90"></div>
                <strong>
                  Platforms (Visual Studio, Docker, Git, Kubernetes)
                </strong>
              </li>
              <li>
                <div className="progress percent75"></div>
                <strong>
                  Cloud Platforms (Microsoft Azure, Amazon Web Services)
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
