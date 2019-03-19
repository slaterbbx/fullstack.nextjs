![nextjs fullstackinator](logo.jpg)

# Nextjs-Fullstackinator
## Nextjs boilerplate with custom folder structure, setup for full stack development.

This project will always stay targeted to a specific use case. When you need a project start point for a highly scalable app with a custom server that has SSR, Code splitting, and some other optimizations out of the box with very little setup needed on your end thanks to the use of Nextjs. At some point this project may evolve into a multi use case boilerplate template engine. But for now, in its early stages, it will be an opinionated boilerplate based on the above mentioned use case.

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

### Brainstorming:
- Template engine allowing for optional setups
  - For example, MobX instead of Redux or Thunk instead of Sagas
  - Restful API instead of Apollo and GraphQL
- Simple CLI tool for pulling "templates" and creating ready to go projects.

### NOTE: Extremely experimental boilerplate, not yet ready for PROD  
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

### Contributions:
If you are planning to invest a lot of time into a major feature, first make a pull request to add a feature idea to the "Brainstorming" list in this readme.md file. If it does not make it past this, and you are certian that it should be in this project, contact me via email. Other than that, small pulls and fixes just go ahead and make those, Thanks!

### License:
MIT License | Nextjs-Fullstackinator © 2019 Kyle Gallagher