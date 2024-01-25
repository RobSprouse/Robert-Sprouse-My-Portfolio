// COMMENT: imports required modules
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/UI/Header/Header.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";
import Button from "react-bootstrap/esm/Button.js";

// COMMENT: 
function App() {
     // COMMENT: checks if the user's device is set to dark or light mode, sets to dark if it is or none are defined
     const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
     const [darkMode, setDarkMode] = useState(prefersDark);

     useEffect(() => {
          document.documentElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
     }, [darkMode]);

     // COMMENT: App component return that contains the Header, Outlet, and Footer components
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

// COMMENT: export App component
export default App;
