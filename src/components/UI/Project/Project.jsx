// COMMENT: imports required modules
import { useState } from "react";
import "./project.scss";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

// COMMENT: Project component
const Project = (props) => {
     // COMMENT: useState hook to set the state of the accordion
     const [open, setOpen] = useState(false);

     // COMMENT: styles object
     const styles = {
          div: "d-flex flex-column align-items-center justify-content-start m-4 imgContainer",
          imgDiv: "",
          img: " border rounded-5 img-thumbnail ",
          title: "projectTitle text-center",
          accordion: "accordion",
          collapsedDiv: "d-flex flex-row flex-wrap align-items-center justify-content-around",
     };
// COMMENT: function for that returns the part of the code that the accordion will toggle off of
     function ProjectToggle({ children, eventKey }) {
          // COMMENT: useState hook to set the state of the accordion
          const expandDetails = useAccordionButton(eventKey, () => setOpen(!open));
          // COMMENT: 
          return (
               <div onClick={expandDetails} onMouseEnter={() => setOpen(true)} className={styles.imgDiv}>
                    <img src={props.image} alt="Project Image" className={styles.img} />
                    <h5 className={styles.title}>{props.title}</h5>
               </div>
          );
     }

     // COMMENT: the accordion that will expand and collapse when the user hovers over the returned ProjectToggle component
     return (
          <div className={styles.div}>
               <Accordion
                    className={styles.accordion}
                    activeKey={open ? "0" : null}
                    onMouseLeave={() => setOpen(false)}
               >
                    <ProjectToggle eventKey="0"></ProjectToggle>
                    <Accordion.Collapse eventKey="0">
                         <div className={styles.collapsedDiv}>
                              <p>{props.description}</p>
                              <a href={props.github} target="_blank" rel="noopener noreferrer">
                                   <FaGithub size="2em" />
                              </a>
                              <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                                   <FaGlobeAmericas size="2em" />
                              </a>
                         </div>
                    </Accordion.Collapse>
               </Accordion>
          </div>
     );
};

// COMMENT: export Project component
export default Project;
