import { Button } from "react-bootstrap";
import "./header.scss";
import Nav from "./Navigation/Navigation";
import { Form } from "react-bootstrap";
import { PiSunFill } from "../../../../node_modules/react-icons/pi";

function Header({ toggleDarkMode }) {
     return (
          <>
               <header className="d-flex row container mx-auto">
                    <div className="row g-0">
                         <h1 className="col-9 d-flex align-self-end">Robert Sprouse</h1>
                         <div className="col-3 d-flex align-items-center justify-content-end p-2">
                              <PiSunFill className="col-1 justify-content-end" />
                              <Form.Check
                                   className="col-1 d-flex align-items-start justify-content-center m-1"
                                   type="switch"
                                   id="custom-switch"
                                   label=""
                                   onChange={toggleDarkMode}
                                   defaultChecked
                              />
                              <PiSunFill className="col-1 justify-content-start" />
                         </div>
                    </div>

                    <Nav />
               </header>
          </>
     );
}

export default Header;
