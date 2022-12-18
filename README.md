# co-ordinate-calculator

## User Story

As a surveyor I want to be able to compare lists of points so I can work out characteristics of those
points and plan work for my survey team

## Description

Write a simple React web page that presents a form with a text box where a user can enter series
of pairs of coordinates and then submit them – the page will then display:

- [ ] The closest pair and their distance apart
- [ ] The most separated (furthest apart) pair and their distance apart
- [ ] The average distance between every point pair

## Acceptance Criteria

- The input box will accept the points as comma separated pairs and each pair of coordinates
  separated by a space ie: 0.0,1.0 3.5,8.0 4.0,3.1

This is passing coordinate pairs:
0.0, 1.0
3.5, 8.0
4.0, 3.1

- [ ] If two pairs of points are equally close or equally far apart then it doesn’t matter which of the
      duplicates is shown.
- [x] If invalid input is provided – then simple error messages should be displayed.
- [x] Point coordinates should be output to 1 decimal place and distances to two decimal places.
- [x] Able to handle any number of pairs, but likely number is 2 to 10 pairs
- [x] Code to be written in React and either javascript or typescript

## Example usage

Sample input and provided output:

- [x] Input : 0,1.234 3,8 4,3 10,13
- [x] Closest 0.0,1.2 4.0,3.0 Distance 4.37
- [ ] Furthest 0.0,1.2 10.0,13.0 Distance 15.44
- [ ] Average Distance 8.76

======================

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
