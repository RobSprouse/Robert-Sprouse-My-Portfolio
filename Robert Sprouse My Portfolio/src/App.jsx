import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/UI/Header/Header.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";
import Button from "react-bootstrap/esm/Button.js";

function App() {
     const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
     const [darkMode, setDarkMode] = useState(prefersDark);

     useEffect(() => {
          document.documentElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
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
