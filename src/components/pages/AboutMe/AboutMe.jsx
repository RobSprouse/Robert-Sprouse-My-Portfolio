import "./AboutMe.scss";
import profilePic from "../../../assets/abouteMe/200x200.jpg";

function AboutMe() {
     const styles = {
          section: "d-flex flex-column align-items-center",
          img: "mb-3 profilePic",
          h4: "mb-4",
          p: "justify-text",
     };

     return (
          <section className={styles.section}>
               <img src={profilePic} alt="profile picture" className={styles.img} />
               <h4 className={styles.h4}>AboutMe</h4>
               <p className={styles.p}>
                    My name is Robert Sprouse. After seventeen years of experience being a Military Police Officer in
                    the Virginia Army National Guard, one combat tour in Iraq, an Intelligence Officer with the Virginia
                    Department of Corrections, and a Police Officer, I decided to pursue a career in web development. I
                    am currently enrolled in the University of Richmond's Full Stack Web Development Bootcamp.
               </p>
          </section>
     );
}

export default AboutMe;
