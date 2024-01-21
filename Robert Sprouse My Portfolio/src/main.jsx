import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.scss";
import App from "./App.jsx";
import Pages from "./components/pages/index.jsx";
import ErrorBoundary from "./components/UI/ErrorBoundary/ErrorBoundary.jsx";

const { AboutMe, ContactMe, NotFound, Portfolio, Resume } = Pages;

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
