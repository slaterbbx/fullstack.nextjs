![nextjs fullstackinator](headerIMG.jpg)

## Nextjs boilerplate with custom folder structure, setup for full stack development.

This project is an opinionated boilerplate for a fullstack workflow using a Nodejs server with express and NextJs for the React front end. The idea is to make it a solid boilerplate for large scale SSR projects that require a custom node backend.. <br>

### Why should I start my project with this?
I created this because I needed it for a project. I could not find a solid start point for the project that incorporated Typescript / React / NextJs and NodeJs with Express as the backend. I already got what I need from it, and it could be used right now to start any project. Although I plan to add an example project to it so that it can also be a good learning resource. 

### Currently working with:
- [x] Nextjs
  - Custom folder structure
- [x] Redux
  - Redux-Sagas
  - Redux-Actions
  - Redux Dev Tools / Chrome extension for dev build
- [x] Express server
  - Nodemon file watching
- [x] Typescript
- [x] Styled-Components
- [x] Apollo GraphQL - ( still needs better example )
- [x] Mongoose ( still needs better example )

### Coming in some future updates:
- [ ] Better use case examples and commenting
- [ ] Docker containerization
- [ ] CI / CD examples for launching and managing your full stack project
- [ ] Testing for examples with CI / CD
 

## How to use it:
### Clone the repo:
```
git clone https://github.com/slaterbbx/fullstackinator.git
```
### React + Nextjs:
https://nextjs.org/docs/ <br>
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