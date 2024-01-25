import proficiencies from "../../../assets/proficiencies.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import Resume2024 from "../../../assets/Resume/2023-Resume-for-portfolio.pdf";

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
               <a href={Resume2024} download target="_blank" rel="noopener noreferrer">
                    <FaDownload size="2em" className={styles.a} />
                    Download Resume
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
