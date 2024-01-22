import { Button, Placeholder } from "react-bootstrap";
import "./header.scss";
import Nav from "./Navigation/Navigation";
import { Form } from "react-bootstrap";
import { IoSunnyOutline } from "react-icons/io5";

import { IoIosMoon } from "react-icons/io";

function Header({ toggleDarkMode }) {
     return (
          <>
               <header className="d-flex row container-fluid mx-auto">
                    <div className="d-flex flex-row justify-content-between">
                         {/* <img src="https://via.placeholder.com/150" alt="placeholder" className="col-auto" /> */}
                         <h1 className="flex-fill h-100">Robert Sprouse</h1>
                         <div className="d-flex align-items-center">
                              <IoSunnyOutline className="" size={24} />
                              <Form.Check
                                   className="d-flex justify-content-center m-1"
                                   type="switch"
                                   id="themeSwitch"
                                   label=""
                                   onChange={toggleDarkMode}
                                   defaultChecked
                              />
                              <IoIosMoon className="" size={24} />
                         </div>
                    </div>
                    <h5 className="">
                         <em className="">Full Stack Web Developer</em>
                    </h5>
                    <Nav />
               </header>
          </>
     );
}

export default Header;
