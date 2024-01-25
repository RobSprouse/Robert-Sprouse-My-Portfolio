import "./project.scss";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const Project = (props) => {
     const styles = {
          div: "d-flex flex-column align-items-center justify-content-start m-4 imgContainer",
          imgDiv: "",
          img: " border rounded-5 img-thumbnail ",
          title: "projectTitle text-center",
          accordion: "accordion",
          collapsedDiv: "d-flex flex-row flex-wrap align-items-center justify-content-around",
     };

     function ProjectToggle({ children, eventKey }) {
          const expandDetails = useAccordionButton(eventKey, () => {});

          return (
               <div onClick={expandDetails} className={styles.imgDiv}>
                    <img src={props.image} alt="Project Image" className={styles.img} />
                    <h5 className={styles.title}>{props.title}</h5>
               </div>
          );
     }

     return (
          <div className={styles.div}>
               <Accordion className={styles.accordion}>
                    <ProjectToggle eventKey="0"></ProjectToggle>
                    <Accordion.Collapse eventKey="0">
                         <div className={styles.collapsedDiv}>
                              <p>{props.description}</p>
                              <a href={props.github}>GitHub</a>
                              <a href={props.deployed}>Deployed Link</a>
                         </div>
                    </Accordion.Collapse>
               </Accordion>
          </div>
     );
};

export default Project;
