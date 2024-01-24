import "./header.scss";
import Nav from "./Navigation/Navigation";
import { CiSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

const Header = ({ isDarkModeEnabled, toggleDarkMode }) => {
     const styles = {
          header: "d-flex row container-fluid mx-auto",
          div: "d-flex flex-row justify-content-between",
          h1: "flex-fill",
          themeButton: "themeButton d-flex",
          sunIcon: isDarkModeEnabled ? "pt-1 " : "pt-1 lightModeHighlight",
          moonIcon: !isDarkModeEnabled ? "pt-1 " : "pt-1 darkModeHighlight",
          h5: "padding-left-heading mb-4",
     };

     return (
          <>
               <header className={styles.header}>
                    <div className={styles.div}>
                         <h1 className={styles.h1}>Robert Sprouse</h1>
                         <div className={styles.themeButton} onClick={toggleDarkMode}>
                              <CiSun className={styles.sunIcon} size={26} />
                              <p>||</p>
                              <CiCloudMoon className={styles.moonIcon} size={26} />
                         </div>
                    </div>
                    <h5 className={styles.h5}>
                         <em className="">Full Stack Web Developer</em>
                    </h5>

                    <Nav />
               </header>
          </>
     );
};

export default Header;
