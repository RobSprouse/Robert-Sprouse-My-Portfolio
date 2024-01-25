import proficiencies from "../../../assets/proficiencies.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { FaGoogleDrive } from "react-icons/fa";

function Resume() {
     const styles = {
          section: "d-flex flex-column justify-content-center mx-auto text-center",
          a: "m-2",
          iconDiv: "d-flex justify-content-around m-3",
          textDiv: "text-center",
          proficienciesDiv: "d-flex align-items-center justify-content-center mr-1",
          container: "mt-5",
          title: "display-5 mb-5",
     };

     return (
          <section className={styles.section}>
               <a
                    href="https://docs.google.com/document/d/1PJqbYeXZvpqSP8J_XM1TLBhNHIF-keub/edit?usp=drive_link&ouid=117059958261249643585&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    <FaGoogleDrive size="2em" className={styles.a} />
                    Resume - View on Google Drive
               </a>

               <Container className={styles.container}>
                    <h1 className={styles.title}>Proficiencies</h1>
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
