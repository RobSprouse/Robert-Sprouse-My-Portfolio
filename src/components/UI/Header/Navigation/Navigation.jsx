// COMMENT: imports required modules
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

// COMMENT: Navigation component
function Navigation() {
     const location = useLocation();


     // COMMENT: styles object
     const styles = {
          nav: "d-flex mb-4 justify-content-center",
     };

     // COMMENT: Navigation component return that contains links to the AboutMe, Portfolio, Resume, and ContactMe pages
     return (
          <Nav className={styles.nav} variant="pills" activeKey={location.pathname}>
               <Nav.Item>
                    <Nav.Link as={Link} to="/" eventKey="/">
                         About Me
                    </Nav.Link>
               </Nav.Item>

               <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio">
                    Portfolio
               </Nav.Link>

               <Nav.Link as={Link} to="/resume" eventKey="/resume">
                    Resume
               </Nav.Link>

               <Nav.Link as={Link} to="/contactme" eventKey="/contactme">
                    Contact Me
               </Nav.Link>
          </Nav>
     );
}

// COMMENT: export Navigation component
export default Navigation;
