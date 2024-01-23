import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/UI/Header/Header.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";

function App() {
     const [darkMode, setDarkMode] = useState(() => {
          const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
          const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
          return prefersDark || !prefersLight;
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
               <Header isDarkModeEnabled={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

               <main>
                    <Outlet />
               </main>

               <Footer />
          </>
     );
}

export default App;
