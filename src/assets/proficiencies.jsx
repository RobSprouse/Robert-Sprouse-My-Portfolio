import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress, SiHeroku } from "react-icons/si";

const proficiencies = [
     { name: "HTML", icon: <FaHtml5 size="2em" />, description: "Markup language for creating web pages." },
     {
          name: "CSS",
          icon: <FaCss3Alt size="2em" />,
          description:
               "Style sheet language used for describing the look and formatting of a document written in HTML.",
     },
     {
          name: "JavaScript",
          icon: <FaJsSquare size="2em" />,
          description: "High-level, interpreted programming language that conforms to the ECMAScript specification.",
     },
     {
          name: "React",
          icon: <FaReact size="2em" />,
          description: "JavaScript library for building user interfaces.",
     },
     {
          name: "Node",
          icon: <FaNodeJs size="2em" />,
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
     },
     {
          name: "Express",
          icon: <SiExpress size="2em" />,
          description: "Web application framework for Node.js, designed for building web applications and APIs.",
     },
     {
          name: "MySQL",
          icon: <SiMysql size="2em" />,
          description: "Open-source relational database management system.",
     },
     {
          name: "MongoDB",
          icon: <SiMongodb size="2em" />,
          description: "Source-available cross-platform document-oriented database program.",
     },
     {
          name: "Git",
          icon: <FaGitAlt size="2em" />,
          description:
               "Distributed version control system for tracking changes in source code during software development.",
     },
     {
          name: "GitHub",
          icon: <FaGithub size="2em" />,
          description: "Provides hosting for software development and version control using Git.",
     },
     {
          name: "Heroku",
          icon: <SiHeroku size="2em" />,
          description: "Cloud platform as a service supporting several programming languages.",
     },
];

export default proficiencies;
