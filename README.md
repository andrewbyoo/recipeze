# recipeze
[![license](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
## Description
An app for finding recipes and planning meals for the week.

## User Story
```
AS A human with daily decision fatigue regarding what to eat
I WANT a place to collect recipe ideas
SO THAT I can easily plan my week’s meals
```

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Link](#link)
- [Collaborators](#collaborators)
- [License](#license)
- [Features](#features)
- [Questions](#questions)

## Installation
- To get the app on your local machine:
  1. Click on the code button on the repo.
  2. Copy the HTTPS or SSH link.
  3. Within the terminal, run the command `git clone` + the copied HTTPS or SSH link, then `cd recipeZe`.
  4. To get the app prepared to run, in the terminal, run the command `npm i` to install dependencies.
  6. On (https://www.edamam.com/), sign up for a free API Key for adding to your .env files.
  5. Add a .env file in both the client and server folder. The server .env file should contain a `JWT=` secret password and the client .env file should contain a `REACT_APP_API_KEY=` and a `REACT_APP_API_ID=` which will require your personal API Key information.
  6. Run `npm run seed && build` and then `npm run develop`.

## Usage

![recipeze screenshot](./assets/recipeze-screenshot.png)

## Link
Visit the deployed site at: (https://andrewbyoo-recipeze.herokuapp.com/)

## Collaborators
Andrew Yoo - GitHub: [andrewbyoo](https://github.com/andrewbyoo)

Kara Heeb - GitHub: [kheeb](https://github.com/kheeb)

Ray Hewitt - GitHub: [Rayman244](https://github.com/Rayman244)

Warren Haskins - GitHub: [warrenhaskins1](https://github.com/warrenhaskins1)

## License
This application is covered under the MIT license.

## Features
- React based front end
- GraphQL with Node.js and Express.js server
- MongoDB and Mongoose ODM for the database

## Questions
To reach out with questions via email or to view more of our projects, visit our GitHub profile pages listed within the [Collaborators](#collaborators) section.
