# Frontend Coding Challenge

## Task 1:
Create an app using angular and Angular Material to search and display Star Wars characters using [Swapi](https://swapi.co/)
![Mock Up design](https://i.imgur.com/RA0lZtYg.png, "Mock Up design")

### Requirements
On page load display all characters returned from the endpoint `https://swapi.co/api/people/`

Display the visible amount shown and the max result count

Add a material select so the user can sort the results by:
- A-Z
- Z-A
- Male
- Female

On each card in the results include an image `assets/mock-image.png` and display the character name below as shown in the design. For every odd card use image `assets/mock-image-1.png`

When the user clicks load more it should append the next set of results

When a user types a character name and clicks search it should call `https://swapi.co/api/people/?search=` and update the results.

## Task 2:
Fizz Buzz:

Write a short program including unit tests that prints each number from 1 to 100 using console.log.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
