import { FaGoogleDrive } from "react-icons/fa";

function Resume() {
     const styles = {
          section: "d-flex flex-column justify-content-center mx-auto text-center",
          a: "m-2",
     };

     return (
          <section className={styles.section}>
               <a
                    href="https://docs.google.com/document/d/1PJqbYeXZvpqSP8J_XM1TLBhNHIF-keub/edit?usp=drive_link&ouid=117059958261249643585&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    <FaGoogleDrive size="2em" className={styles.a} />
                    Resume - View on Google Drive
               </a>
          </section>
     );
}

export default Resume;
