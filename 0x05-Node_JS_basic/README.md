Holberton School - Project Title
This project demonstrates various server-side functionalities using Node.jsand Express.js.The tasks include creating command-line programs, reading and processing a CSV database, and setting up HTTP servers both with and without Express. Below is a detailed description of each task and its implementation.

Table of Contents
Installation

Usage

Tasks

0-console.js

1-stdin.js

2-read_file.js

3-read_file_async.js

4-http.js

5-http.js

6-http_express.js

7-http_express.js

full_server

Installation
Clone this repository:

sh
git clone https://github.com/your-repo/project-name.git
Navigate to the project directory:

sh
cd project-name
Install the necessary dependencies:

sh
npm install
Usage
Running the programs
Execute the JavaScript files directly using Node.js:

sh
node filename.js
Running the full server with Babel
Start the server with Babel:

sh
npx nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv
Tasks
0-console.js
Create a function displayMessage that prints a string argument to STDOUT.

1-stdin.js
Create a command-line program that:

Displays the message Welcome to Holberton School, what is your name?

Allows user to input their name

Displays Your name is: INPUT

When the user ends the program, it displays This important software is now closing

2-read_file.js
Create a function countStudents that:

Reads a CSV database file synchronously

Logs the number of students and lists them by field

3-read_file_async.js
Create a function countStudents that:

Reads a CSV database file asynchronously

Returns a Promise

Logs the number of students and lists them by field

4-http.js
Create a small HTTP server using the http module that:

Listens on port 1245

Displays Hello Holberton School! for any endpoint

5-http.js
Extend the HTTP server to handle /students endpoint, displaying:

This is the list of our students followed by student information

6-http_express.js
Create an HTTP server using Express that:

Listens on port 1245

Displays Hello Holberton School! for the root endpoint /

7-http_express.js
Extend the Express server to handle /students endpoint, displaying:

This is the list of our students followed by student information

full_server
Set up a full server with ES6, Babel, and Express. Organize the server structure as follows:

controllers: Contains controller files

routes: Contains routing files

utils: Contains utility functions

File: full_server/utils.js
Function readDatabase: Reads the database asynchronously and returns a Promise

File: full_server/controllers/AppController.js
Class AppController with a static method getHomepage

File: full_server/controllers/StudentsController.js
Class StudentsController with static methods getAllStudents and getAllStudentsByMajor

File: full_server/routes/index.js
Link routes to controllers

File: full_server/server.js
Create an Express server using the defined routes
