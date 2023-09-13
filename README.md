# webdriverio-assignment

## Installation and Setup

To run this you will need to have Node.js installed. To check this you can run 

`node -v`

Download Node.js here: 
https://nodejs.org/en/download

Once the project is cloned run `npm i` to install dependencies needed

Lastly, you'll need to add .env file for our environment variables. Once created, add this line to the file

`PASSWORD=SuperSecretPassword!`

I know they provide the password on the test site, but this is how I approach storing passwords, api keys, etc. in our application

## Running The Test Suite
Tasks 1-3 of the assignment are created in the webdriverio test suite.

To run all at once:

- `npm run wdio`

To run a single test (task 2 for example):

- `npx wdio ./wdio.conf.js --spec ./test/specs/table.js`

## Running The Utility Functions

Tasks 4 and 5 are meant to act as utility functions and are runnable in the node command line. They are found in the utils folder. To run from the root directory:

- `node test/utils/name_of_file.js`

Note: This is for checkboxes.js and and dropdown.js. util.js is just for storing helper functions used throught out the project