import proficiencies from "../../../assets/proficiencies.jsx";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
     const styles = {
          section: "d-flex flex-column justify-content-center mx-auto text-center",
          a: "m-2",
          iconDiv: "d-flex justify-content-around m-3",
          textDiv: "text-center",
          proficienciesDiv: "d-flex align-items-center justify-content-center mr-1",
     };

     return (
          <section className={styles.section}>
               <Container>
                    <Row>
                         {proficiencies.map((proficiency, index) => (
                              <Col key={index} md={6}>
                                   <div className={styles.proficienciesDiv}>
                                        <div className={styles.iconDiv}>{proficiency.icon}</div>
                                        <div className={styles.textDiv}>
                                             <h5>{proficiency.name}</h5>
                                             <p>{proficiency.description}</p>
                                        </div>
                                   </div>
                              </Col>
                         ))}
                    </Row>
               </Container>
          </section>
     );
}

export default Resume;
