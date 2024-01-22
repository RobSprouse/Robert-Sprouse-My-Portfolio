import { Button } from "react-bootstrap";
import "./header.scss";
import Nav from "./Navigation/Navigation";

function Header({ toggleDarkMode }) {
     return (
          <>
               <header>
                    <h1>Header</h1>

                    <Button variant="primary" onClick={toggleDarkMode}>
                         Toggle Dark Mode
                    </Button>
                    <Nav />
               </header>
          </>
     );
}

export default Header;
