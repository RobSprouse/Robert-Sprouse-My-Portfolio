// COMMENT: This is the main component that is rendered to the DOM
// COMMENT: imports required modules
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Pages from "./components/pages/index.jsx";
import ErrorBoundary from "./components/UI/ErrorBoundary/ErrorBoundary.jsx";
import "./main.scss";

// COMMENT: destructures the Pages object that contains all of the pages
const { AboutMe, ContactMe, NotFound, Portfolio, Resume } = Pages;

// COMMENT: main component that is rendered to the DOM that contains the Router, Routes, and Route components, has an error boundary and defines the routes for the AboutMe, Portfolio, Resume, and ContactMe pages, has a NotFound page for any undefined routes
ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <ErrorBoundary>
               <Router>
                    <Routes>
                         <Route path="/" element={<App />}>
                              <Route index element={<AboutMe />} />
                              <Route path="contactme" element={<ContactMe />} />
                              <Route path="portfolio" element={<Portfolio />} />
                              <Route path="resume" element={<Resume />} />
                              <Route path="*" element={<NotFound />} />
                         </Route>
                    </Routes>
               </Router>
          </ErrorBoundary>
     </React.StrictMode>
);
