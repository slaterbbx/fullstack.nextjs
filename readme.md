![nextjs fullstackinator](logo.jpg)

## Nextjs boilerplate with custom folder structure, setup for full stack development.

This project is an opinionated boilerplate for a fullstack workflow using a Nodejs server with express and NextJs for the React front end. The idea is to make it a solid boilerplate for large scale projects that require a custom node backend..

### Currently working with:
- Nextjs
  - Custom folder structure
- Redux
  - Redux-Sagas
  - Redux-Actions
  - Redux Dev Tools / Chrome extension for dev build
- Express server
  - Nodemon file watching
- Typescript
- Styled-Components

### Coming in some future updates:
- [ ] Apollo
- [ ] GraphQL
- [ ] Types for redux and Sagas
- [ ] Better use case examples and commenting
- [ ] Docker containerization for dev and prod
- [ ] CI / CD templates for launching and managing your full stack project
- [ ] Testing
 

## How to use it:
### Clone the repo:
```
git clone https://github.com/slaterbbx/fullstackinator.git
```
### learn Nextjs:
Everything functions the same as it would while normally using Next.js to develop a react app, This project is simply a boilerplate. The Nextjs pages folder is now in the ./client folder and the server files are in ./server folder. Nodemon will watch the ./server files and recompile the server ts files upon file changes during `npm run dev`. All production files upon `npm run build` are output to the ./dist folder and can be ran by running `npm start`. The project will eventually show a simple example project that displays the use and functionality of the boilerplate.

### Commands:
## Install:
Install all of those pesky node_modules<br>
`npm install`<br>
## Run development server:
Run the dev server with hot module reload and nodemon server auto restart<br>
`npm dev`<br>
## Build optimized server and client:
Build files are output to ./dist folder<br>
`npm build`<br>
## Run optimized build:
Runs the optimized build from the ./dist folder<br>
`npm start`<br>

### License:
MIT License | Fullstackinator © 2019 Kyle Gallagher