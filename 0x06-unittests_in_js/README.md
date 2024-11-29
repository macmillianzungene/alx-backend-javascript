Project Title: Node.jsand Express.jsApplications
This project showcases various functionalities using Node.js, Mocha, Chai, Sinon, and Express.js.It includes creating command-line programs, reading and processing a CSV database, setting up HTTP servers, and writing comprehensive test suites.

Table of Contents
Installation

Usage

Tasks

0-calcul.js

1-calcul.js

2-calcul_chai.js

3-payment.js

4-payment.js

5-payment.js

6-payment_token.js

7-skip.test.js

8-api

9-api

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
Running the tests
Run the test suites using:

sh
npm test test-file-name.js
Tasks
0-calcul.js
Create a function calculateNumber that rounds two arguments a and b and returns their sum.

Test Cases (0-calcul.test.js)
Ensure correct rounding and summing of numbers.

1-calcul.js
Upgrade the calculateNumber function to include a type argument for operations: SUM, SUBTRACT, DIVIDE.

Test Cases (1-calcul.test.js)
Use describe to organize tests for different operations.

Verify correct behavior for each operation and edge cases.

2-calcul_chai.js
Refactor the function and test cases from 1-calcul.js to use Chai's expect.

Test Cases (2-calcul_chai.test.js)
Utilize Chai's expect for more readable tests.

3-payment.js
Create sendPaymentRequestToApi function that calls Utils.calculateNumber and logs the result.

Test Cases (3-payment.test.js)
Use sinon.spy to verify the function's behavior.

4-payment.js
Stub Utils.calculateNumber to return a fixed value and verify sendPaymentRequestToApi behavior.

Test Cases (4-payment.test.js)
Use sinon.stub to control Utils.calculateNumber.

5-payment.js
Add hooks (beforeEach and afterEach) for setup and teardown in tests.

Test Cases (5-payment.test.js)
Verify console logs for sendPaymentRequestToApi with different inputs.

6-payment_token.js
Create getPaymentTokenFromAPI function returning a promise based on the success argument.

Test Cases (6-payment_token.test.js)
Test async behavior using done callback.

7-skip.test.js
Skip failing tests without removing or fixing them.

Test Cases (7-skip.test.js)
Use it.skip to skip specific test cases.

8-api
Set up an Express server to handle various endpoints.

File: api.js
Create an instance of Express called app.

Listen on port 7865 and respond with Welcome to the payment system.

Test Cases (api.test.js)
Test the / endpoint for correct status and response.

9-api
Extend the API to include /cart/:id endpoint.

File: api.js
Add validation for :id parameter and respond accordingly.

Test Cases (api.test.js)
Verify correct behavior for valid and invalid :id parameters.
