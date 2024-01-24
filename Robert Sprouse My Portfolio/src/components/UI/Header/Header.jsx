import { Button, Placeholder } from "react-bootstrap";
import "./header.scss";
import Nav from "./Navigation/Navigation";
import { Form } from "react-bootstrap";
import { CiSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

function Header({ isDarkModeEnabled, toggleDarkMode }) {
     return (
          <>
               <header className="d-flex row container-fluid mx-auto">
                    <div className="d-flex flex-row justify-content-between">
                         {/* <img src="https://via.placeholder.com/150" alt="placeholder" className="col-auto" /> */}
                         <h1 className="flex-fill">Robert Sprouse</h1>
                         <div onClick={toggleDarkMode} className="themeButton d-flex">
                              <CiSun className={isDarkModeEnabled ? "pt-1 " : "pt-1 lightModeHighlight"} size={26} />
                              <p className="">||</p>
                              <CiCloudMoon
                                   className={!isDarkModeEnabled ? "pt-1 " : "pt-1 darkModeHighlight"}
                                   size={26}
                              />
                         </div>
                    </div>
                    <h5 className="padding-left-heading mb-4">
                         <em className="">Full Stack Web Developer</em>
                    </h5>

                    <Nav />
               </header>
          </>
     );
}

export default Header;
