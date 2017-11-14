Advent Calender
=======

### Introduction

This project builds a custom advent calendar. Used to display date night events during the course of a year. Built with AngularJS and tooling on GulpJS.

### Installation

[NodeJS](https://nodejs.org/) and [GulpJS](http://gulpjs.com/) ([installation](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)) are required to develop and/or build this project. (Tested on node v4.4.7 ang Gulp v3.9.0)

After installing both packages, install the required components by running the following command in the Command Line Interface (CLI) from the project folder:

  install yarn & bower: npm install yarn -g

    yarn install && bower install

After installation, run the following command to ensure correct setup:

    gulp

This should display a list of available commands. The primary commands are:

    gulp dev

and

    gulp build

The dev-task is used during development and does not optimize the assets/code. It has browser-sync enabled and runs unit tests in the background. The build starts with running unit tests and fails on error. It then optimizes the code and runs a code analysis tool ([plato](https://github.com/es-analysis/plato)) on each build in order to give a basic report (./reports/plato/) on the state and complexity of the source code.

For test driven development, simply run the following command:

    gulp test --tdd

This task will start a Karma instance with watchers enabled on de code.

---

### Structure & Style

Comments are used liberaly throughout the code. Feel free to inspect the source files. This app is very limited on views, but I have tried to construct is in such a way that adding new views and features is quite managable.

I have adhered the [Angular 1 styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) as documented by John Papa. In my opinion a great, clear guide in which it is encouraged to break up an SPA into multiple modules. Following that styleguide results in very readable code, especially on larger codebases.

---

### About

Author: [Joran Quinten](https://qtn.io), November 2017
