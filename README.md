# TDDI (Test Driven Development Initializer)

TDDI is an educational platform for learning the foundations of test driven development

* **Easily Digestible Testing Basics:** TDDI presents an easily understood outline of what to test and how
* **Real-time In-browser Code Evaluation:** Solve testing issues in browser with dynamic feedback
* **Real World Applications:** Each section is created to support a step by step plan for testing properly

## Quick Start

In your repo type:

```
npm install
```

This command will install all dependencies and build a development
version of the app.

**NOTE**: You will need a PostgreSQL database with the appropriate database and user to properly populate the database.

```
node populateDB.js
```

This command will populate the database with the data held in sectionData.js

```
npm start
```

This command will start a development server and opens a browser window. All files in src folder will be watched for changes and automatically reload either the server or frontend depending on location of the file. (this command will also attempt to populate the database)


## Table of Contents

1.  [Usage](#usage)
2.  [Requirements](#requirements)
3.  [Tech Stack](#tech-stack)
4.  [Team Members](#team)

## Usage

To interact with the site directly, visit [this link](https://tddi.herokuapp.com)

## Requirements

* [npm](https://www.npmjs.com/package/npm)
* [Node](https://nodejs.org/)
* [PostgreSQL](http://expressjs.com/)

Chrome is not a requirement, but highly recomended for visual consistency

## Tech Stack

We used: 
* [npm](https://www.npmjs.com/package/npm)
* [Node](https://nodejs.org/)
* [Express](http://expressjs.com/)
* [React](https://facebook.github.io/react/)
* [Flux](https://facebook.github.io/flux/)
* [Sequelize](docs.sequelizejs.com/)
* [PostgreSQL](www.postgresql.org/)
* [Mocha](mochajs.org/)
* [Chai](chaijs.com/)
* [Gulp](http://gulpjs.com/)
* [Bootstrap](getbootstrap.com/)


## Team

- __Product Owner__: Lu Yin
- __Scrum Master__: Kurt Bartholomew
- __Technical Expert__: John Winstead
- __Technical Coordinator__: Brian Liu
