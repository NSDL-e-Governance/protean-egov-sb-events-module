# Getting Started

For help getting started with a new Angular app, check out the Angular CLI. For existing
apps, follow these steps to begin using.

## Step 1: Install the package

```
npm install @tekdi/ngtek-event-library
```
## Step 2: Import the modules and components

Import the NgModule for each component you want to use:

```
import { EventLibraryModule } from '@tekdi/ngtek-event-library';
```
```
@NgModule({
declarations: [
AppComponent
],
imports: [
.....
...
EventLibraryModule, <---
....
],
providers: [ ]
})
export class AppModule { }
```

## Step 3: Include the sb-styles and assets in angular.json
```
"styles": [
...
...
"./node_modules/@tekdi/ngtek-event-library/assets/styles/styles.scss"
```
```
]
```
## Available components

Inprogess...


# EventLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

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
