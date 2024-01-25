# Robert-Sprouse-My-Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description:

This repository was created as a part of the University of Richmond's Bootcamp, Module 20 Challenge. The challenge was to build a portfolio site using React and to deploy the site to Netlify. The application uses multiple npm packages including, bootstrap, react-bootstrap, react-icons, sass, node-sass, formik, and yup. The application is deployed to Netlify at the following URL: https://main--robsprouse.netlify.app/

The following User Story and Acceptance Criteria were provided for this challenge:

> ## User Story
>
> ```md
> AS AN employer looking for candidates with experience building single-page applications
> I WANT to view a potential employee's deployed React portfolio of work samples
> SO THAT I can assess whether they're a good candidate for an open position
> ```
>
> ## Acceptance Criteria
>
> ```md
> GIVEN a single-page application portfolio for a web developer
> WHEN I load the portfolio
> THEN I am presented with a page containing a header, a section for content, and a footer
> WHEN I view the header
> THEN I am presented with the developer's name and navigation with titles corresponding to different >sections of the portfolio
> WHEN I view the navigation titles
> THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding >to the current section is highlighted
> WHEN I click on a navigation title
> THEN the browser URL changes and I am presented with the corresponding section below the navigation and >that title is highlighted
> WHEN I load the portfolio the first time
> THEN the About Me title and section are selected by default
> WHEN I am presented with the About Me section
> THEN I see a recent photo or avatar of the developer and a short bio about them
> WHEN I am presented with the Portfolio section
> THEN I see titled images of six of the developer’s applications with links to both the deployed >applications and the corresponding GitHub repositories
> WHEN I am presented with the Contact section
> THEN I see a contact form with fields for a name, an email address, and a message
> WHEN I move my cursor out of one of the form fields without entering text
> THEN I receive a notification that this field is required
> WHEN I enter text into the email address field
> THEN I receive a notification if I have entered an invalid email address
> WHEN I am presented with the Resume section
> THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
> WHEN I view the footer
> THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their .>profile on a third platform (Stack Overflow, Twitter)
> ```

## Table of Contents

-    [Installation](#installation)
-    [Usage](#usage)
-    [License](#license)
-    [Contributing](#contributing)
-    [Tests](#tests)
-    [Questions](#questions)

## Installation

This application has been deployed to a live site and does't require installation. The application is deployed to Netlify at the following URL:

https://main--robsprouse.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/bcae36f0-5bd7-44be-ba28-b011be76afa2/deploy-status)](https://app.netlify.com/sites/robsprouse/deploys)

If you would like to see this application in its development environment, please follow the instructions below.

This application requires Node.js to run. Please visit https://nodejs.org/en/ to download Node.js if it is not already installed on your computer.

If you are unfamiliar with cloning a repository, please click on the following link to learn: [Github docs | Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

To install this application locally, clone the repository, navigate to its directory in the terminal, and run `npm install` in the command line to install the required dependencies.

The following scripts are available to run in the command line from the root directory of the project:

```json
     "scripts": {
          "dev": "vite",
          "build": "vite build",
          "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
          "preview": "vite preview"
     },
```

While still navigated to the parent directory in the terminal, use the command `npm run dev` to start the server and run the application. The terminal will provide a localhost URL to navigate to in your browser to view the application.

## Usage

After navigating to the application in your browser, you will first be directed to the About Me page. The navigation bar at the top of the page will allow you to navigate to the Portfolio, Contact, and Resume pages. The navigation bar will also highlight the current page you are on. The footer contains links to my Github, LinkedIn, and Stack Overflow profiles. At the top right of the page, there is a button to toggle between light and dark mode. The contact form on the Contact page allows input and validation of a name, email address, and message, however, the form does not currently submit anywhere and is only for demonstration purposes at this time.

## License

This application is licensed under the MIT license. See the following link for more information: https://opensource.org/licenses/MIT

## Contributing

Feel free to contribute to this project! Please fork the repository and create a pull request with your changes.

## Tests

No tests are included in this application.

## Questions

If you have any questions, please contact me at drgstriker@aol.com. You can also visit my GitHub profile at https://github.com/RobSprouse.
