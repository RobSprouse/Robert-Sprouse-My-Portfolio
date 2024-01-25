import proficiencies from "../../../assets/proficiencies.jsx";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
     const styles = {
          section: "d-flex flex-column justify-content-center mx-auto text-center",
          a: "m-2",
     };



     return (
          <section className={styles.section}>
               <Container>
                    <Row>
                         {proficiencies.map((proficiency, index) => (
                              <Col key={index} md={6}>
                                   <div className="d-flex align-items-center mr-1">
                                        <div className="d-flex justify-content-around m-3">{proficiency.icon}</div>
                                        <div className="text-center">
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
