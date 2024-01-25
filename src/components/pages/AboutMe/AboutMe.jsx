// COMMENT: importing required modules
import "./AboutMe.scss";
import profilePic from "../../../assets/abouteMe/200x200.jpg";

// COMMENT: AboutMe component
function AboutMe() {
     // COMMENT: styles object
     const styles = {
          section: "d-flex flex-column align-items-center",
          img: "mb-3 profilePic",
          h4: "display-5 mb-5",
          p: "justify-text",
     };

     // COMMENT: AboutMe component return
     return (
          <section className={styles.section}>
               <img src={profilePic} alt="profile picture" className={styles.img} />
               <h4 className={styles.h4}>About Me</h4>
               <p className={styles.p}>
                    My name is Robert Sprouse. After seventeen years of experience being a Military Police Officer in
                    the Virginia Army National Guard, one combat tour in Iraq, an Intelligence Officer with the Virginia
                    Department of Corrections, and a Police Officer, I decided to pursue a career in web development. I
                    am currently enrolled in the University of Richmond's Full Stack Web Development Bootcamp.
               </p>
          </section>
     );
}

// COMMENT: export AboutMe component
export default AboutMe;
