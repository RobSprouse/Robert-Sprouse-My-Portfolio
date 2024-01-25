// COMMENT: imports required modules
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

// COMMENT: Footer component
function Footer() {
     const styles = {
          footer: "d-flex justify-content-center align-items-center mt-5 w-100",
          icon: "mx-2 ",
          size: "2em",
     };
// COMMENT: return Footer component that contains links to my GitHub, LinkedIn, and StackOverflow profiles
     return (
          <footer className={styles.footer}>
               <a href="https://github.com/RobSprouse" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.icon} size={styles.size} />
               </a>
               <a
                    href="https://www.linkedin.com/in/robert-sprouse-25a0b327b/"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    <FaLinkedin className={styles.icon} size={styles.size} />
               </a>
               <a href="https://stackoverflow.com/users/23294635/robsprouse" target="_blank" rel="noopener noreferrer">
                    <FaStackOverflow className={styles.icon} size={styles.size} />
               </a>
          </footer>
     );
}

export default Footer;
