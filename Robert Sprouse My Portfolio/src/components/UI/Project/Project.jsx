import "./project.scss";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const Project = (props) => {
     const styles = {
          div: "d-flex flex-column align-items-center justify-content-start m-3",
          imgDiv: "position-relative",
          img: " border rounded-5",
          title: "projectTitle",
     };

     function ProjectToggle({ children, eventKey }) {
          const expandDetails = useAccordionButton(eventKey, () => {});

          return (
               <div onClick={expandDetails} className={styles.imgDiv}>
                    <img src={props.image} alt="Project Image" className={styles.img} />
                    <p className={styles.title}>{props.title}</p>
               </div>
          );
     }

     return (
          <div className={styles.div}>
               <Accordion>
                    <ProjectToggle eventKey="0"></ProjectToggle>
                    <Accordion.Collapse eventKey="0">
                         <>
                              <p>{props.description}</p>
                              <a href={props.github}>GitHub</a>
                              <a href={props.deployed}>Deployed</a>
                         </>
                    </Accordion.Collapse>
               </Accordion>
          </div>
     );
};

export default Project;
