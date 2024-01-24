import "./AboutMe.scss";

function AboutMe() {
     return (
          <section className="d-flex flex-column align-items-center">
               <img src="https://via.placeholder.com/150" alt="placeholder" className="mb-3 profilePic" />
               <h4 className="mb-4">AboutMe</h4>
               <p className="justify-text">
                    My name is Robert Sprouse. After seventeen years of experience being a Military Police Officer in
                    the Virginia Army National Guard, one combat tour in Iraq, an Intelligence Officer with the Virginia
                    Department of Corrections, and a Police Officer, I decided to pursue a career in web development. I
                    am currently enrolled in the University of Richmond's Full Stack Web Development Bootcamp.
               </p>
          </section>
     );
}

export default AboutMe;
