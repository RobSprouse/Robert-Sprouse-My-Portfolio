import "./project.scss";
import { Card } from "react-bootstrap";

const Project = (props) => {
     const styles = {
          section: "d-flex flex-column align-items-center",
     };

     return (
          <section className={styles.section}>
               <Card>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Footer>
                         <h5>{props.title}</h5>
                         <p>{props.description}</p>
                         <p>{props.github}</p>
                         <p>{props.deployed}</p>
                    </Card.Footer>
               </Card>
          </section>
     );
};

export default Project;
