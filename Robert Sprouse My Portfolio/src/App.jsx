import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/UI/Header/Header.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";


function App() {
     const [darkMode, setDarkMode] = useState(() => {
          if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
               return true;
          } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
               return false;
          } else {
               return true;
          }
     });

     useEffect(() => {
          const html = document.documentElement;

          if (darkMode) {
               html.setAttribute("data-bs-theme", "dark");
          } else {
               html.setAttribute("data-bs-theme", "light");
          }
     }, [darkMode]);

     return (
          <>
               <Header toggleDarkMode={() => setDarkMode(!darkMode)} />

               <main>
                    <Outlet />
               </main>

               <Footer />
          </>
     );
}

export default App;
