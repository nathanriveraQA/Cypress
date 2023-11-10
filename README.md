<h1>Cypress Tutorial</h1>

# Cypress Cucumber Automation Framework

This repository is a template for setting up a test automation framework for web applications using [Cypress](https://www.cypress.io/) and [Cucumber](https://cucumber.io/) in Visual Studio Code. It's designed to help you quickly get started with behavior-driven development (BDD) and end-to-end testing.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Introduction

[Cypress](https://www.cypress.io/) is a powerful end-to-end testing framework for web applications, and [Cucumber](https://cucumber.io/) is a popular BDD tool. Combining these two tools allows you to write and run tests in plain English, making them more accessible to non-technical stakeholders.

This framework provides a structured project setup with predefined directories for test features, step definitions, and utilities. It also includes sample feature files and step definitions to help you get started quickly.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [Visual Studio Code](https://code.visualstudio.com/) (or your preferred code editor).
- Basic knowledge of Cypress and Cucumber.

## Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/nathan-rivera/Cypress.git
   ```

2. Navigate to the project directory and install the dependencies:

   ```bash
   cd cypress-cucumber-automation
   npm install
   ```

## Writing Tests

1. Write your feature files in Gherkin syntax. Place them in the `cypress/integration` directory.

   Example feature file (`login.feature`):

   ```gherkin
   Feature: User Login
     As a registered user
     I want to log in to the application
     So that I can access my account

     Scenario: Successful login
       Given I open the login page
       When I enter valid credentials
       And I click the login button
       Then I should be logged in
   ```

2. Write step definitions to match your feature files. Place them in the `cypress/support/step_definitions` directory.

   Example step definition (`login.js`):

   ```javascript
   import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

   Given("I open the login page", () => {
     // Cypress code to open the login page
   });

   When("I enter valid credentials", () => {
     // Cypress code to enter valid credentials
   });

   When("I click the login button", () => {
     // Cypress code to click the login button
   });

   Then("I should be logged in", () => {
     // Cypress code to assert the user is logged in
   });
   ```

## Running Tests

To run your tests, use the following commands:

- To open Cypress test runner:

  ```bash
  npm run cypress:open
  ```

- To run tests headlessly (useful for CI/CD):

  ```bash
  npm test
  ```

## Reporting

This framework includes a basic HTML reporter. You can find the generated HTML report in the `cypress/reports` directory after running your tests.

## Customization

Feel free to customize this framework to fit your specific project needs. You can add plugins, custom commands, and more to enhance your testing capabilities.

## Contributing

Contributions are welcome! If you have any improvements, feature suggestions, or bug fixes, please open an issue or create a pull request on this repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Happy testing with Cypress and Cucumber!
