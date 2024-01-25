import "./Portfolio.scss";
import Project from "../../UI/Project/Project";
import projects from "../../../assets/projects.js";

function Portfolio() {
     const styles = {
          section: "d-flex flex-column align-items-center",
          projects: "d-flex flex-row flex-wrap justify-content-around ",
          h4: "display-5 mb-5",
     };

     return (
          <section className={styles.section}>
               <h4 className={styles.h4}>Projects</h4>
               <div className={styles.projects}>
                    {projects.map((p, index) => (
                         <Project
                              key={index}
                              title={p.title}
                              description={p.description}
                              image={p.image}
                              github={p.github}
                              deployed={p.deployed}
                         />
                    ))}
               </div>
          </section>
     );
}

export default Portfolio;
