# Airbnb Experiences Clone Project
The Airbnb experiences clone project is a static web application built using the front-end JavaScript library, React. The project displays a clean user interface with an array of different experiences each displayed on a card with an average rating, number of reviews made, and price per person, that the user can scroll through horizontally. React props were used to pass data through into each card component to make the component reusable. The data used for the experiences is listed in JSON format in a JavaScript file called data.js. (Note: site is not currently interactive but is a user interface model)

![Airbnb](./images/airbnb.png?raw=true "Airbnb")
<br></br>

## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 

## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
- Install the latest version of npm (JavaScript package manager)
- Install the latest version of vite which can be done by typing in the command line 'npm install -D vite'
- The web application can be run on your local server by typing in the command line 'npm run dev'

## How to Deploy
- To build out the application for deployment use “npm run build”
- To test out the preview before deploying the application use “npm run preview”
- Deploy the application on your server of choice:
  - Netlify using the command line
    - Install the Netlify CLI using “npm install -g netlify-cli”
    - Create a new site in Netlify using “ntl init”
    - Deploy to a unique preview URL using “ntl deploy”
    - The Netlify CLI will share with you a preview URL to inspect. When you are ready to go into production, use the prod flag to deploy the site into production “ntl deploy --prod”
  - Netlify using github
    - Import the project to netlify
    - Choose the branch, output directory, and set up environment variables if applicable and click deploy

