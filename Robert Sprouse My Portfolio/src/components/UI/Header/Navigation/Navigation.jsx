import Nav from "react-bootstrap/Nav";
import "./navigation.scss";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

function Navigation() {
     const location = useLocation();

     return (
          <Nav className="d-flex mb-4 justify-content-center" variant="pills" activeKey={location.pathname} >
               <Nav.Item>
                    <Nav.Link as={Link} to="/" eventKey="/">
                         Home
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

export default Navigation;
