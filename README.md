# Marker-allocation-tool-ui

Trello board: https://trello.com/b/mAYp4wAx/classe-a-web-based-tool-for-organising-markers

# Getting started

1. Install Node js.

2. Then to install Yarn: `npm install -g yarn`

3. Install https://volta.sh/ for automatic node version management

4. From project root run `yarn install`

5. Then run `yarn dev` to open application in localhost 

## Tools

Craco - Helps extend create-react-app for use with tailwind

Volta - makes sure you have the right node.js and yarn version set

Create-react-app - [Create React App](https://github.com/facebook/create-react-app) [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Useful Vscode extensions

Tailwind CSS IntelliSense - https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

Refactor CSS - https://marketplace.visualstudio.com/items?itemName=urbantrout.refactor-css

## Other resources

https://github.com/typescript-cheatsheets/react

https://tailwindcomponents.com/cheatsheet/

# Contributing 

To start working on a feature either:

- work on a existing branch (not develop or main)
- or checkout from develop and name the branch according the branch name specified in the trello item e.g. MAT-2

Do not merge develop branch into main until we are ready to do a deployment and have done testing.

# Backend Endpoints routes

## GET

Get a list of users 
  - [/users ](url)

Get a single user using id 
  - [/user/:userID ](url)

Get a list of applications
  - [/applications ](url)
 
Get a list of courses
  - [/courses](url)
    
Get a list of available/open courses
  - [/courses/available](url)

Get a list of applications for a course
  - [/course/:courseID/applications](url)
 
Get a list of allocated markers for a course
  - [/course/:courseID/markers  ](url)

Get a count of the current number of applications for a course
  - [/course/:courseID/application/total ](url)

Get a count of the remaining number of marker spots open for a course
  - [/course/:courseID/application/open ](url)

Get a single course row by courseID
  - [/application/:applicationID](url)

Get a list of course coordinators
  - [/coursecoordinators ](url) 

## POST

Post insert a user
  - [/user/](url)
 
Post insert a application
  - [/application/](url)

Post insert a course
  - [/course/ ](url)
