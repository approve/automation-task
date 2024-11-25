# automation-task 🤖

Hey candidate! Thank you for your time 🙂

We are Tipalti's Procurement group (also known as Approve).
Our group works in fast development cycles, meaning versions might be released multiple times a day.
All those versions are verified using our automation tests before every release, which means that all of our developers rely on our tests in order to release their versions.

## Task 1: todoMVC
todoMVC is a [simple todo application](https://todomvc.com/examples/react/dist/) written in React.js and has very basic capabilities:
- add todo
- remove todo
- mark todo as done
- filter active todos
- filter completed todos

Your goal is to write a test suite to test this application. Focus on coverage for the whole app, but make sure the critical features and functions are included.
Write the tests in whatever format you are comfortable with, just make sure to include the test title, steps to reproduce and expected results. 

## Task 2: Automation
- Choose 3 of the most critical test scenarios written in the last step
- Fork this repository
- choose the framework you're more comfortable with
  - [playwright 🎭](https://playwright.dev/docs/intro)
    - Write test files under `src/playwright-tests/` directory, use `example.spec.ts` file and documentation as reference
    - To test your work run `npm run playwright`
  - [selenium ✅](https://www.selenium.dev/documentation/webdriver/getting_started/)
    - Write test files under `src/selenium-tests/` directory, use `example.spec.ts` file and documentation as reference
    - To test your work run `npm run selenium`
- All tests should pass
- The tests should be as readable and easy to maintain as possible
