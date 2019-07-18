## NOTE: This version is working but the file structure is not how it was in the master branch  
I am working on this and would prefer that it was the way it was before but it seems that currently I cannot seem to get the next.config.js file to be recognized by Next.js. As of right now, the server build files are found in a created ./dist folder and the next files are being built into the ./client/.next folder. Ultimately this would be fine and works, but I prefer to have all of the files in the ./dist folder. If anyone has an understanding as to why the next.config.js file is being ignored, please feel free to create a pull request on this branch. Thanks!

![nextjs fullstackinator](headerIMG.jpg)

## ⚡️ Nextjs boilerplate for full stack development. ⚡️
This project is an opinionated boilerplate for a fullstack workflow using a Nodejs server with express and NextJs for the React front end. The idea is to make it a solid boilerplate for large scale SSR projects that require a custom node backend.  

### 🔎 More about this project
I could not find a solid start point for the project that incorporated Typescript / React / NextJs and NodeJs with Express as the backend, I also wanted to have a simplified folder structure for oganization. This boilerplate takes care of handling that start point so that you only need to consider your options for database and the API you plan to use to query data from your database. Redux in incorporated for all local / global state managment. Typescript is setup to work in both server and client files.

### 🔓 Currently working with:
- [x] Nextjs
  - Custom folder structure
- [x] Redux
  - Redux-Sagas
  - Redux-Actions
  - Redux Dev Tools / Chrome extension for dev build
- [x] Express server
  - Nodemon file watching ( live server restart for code changes )
- [x] Typescript
- [x] Styled-Components 💅
 

## 👁‍🗨 How to use it:
### Clone the repo:
```
git clone https://github.com/slaterbbx/fullstackinator.git
```
### React + Nextjs:
https://nextjs.org/docs/  
Everything functions the same as it would while normally using Next.js to develop a react app, This project is simply a boilerplate. The Nextjs pages folder is now in the ./client folder and the server files are in ./server folder. Nodemon will watch the ./server files and recompile the server ts files upon file changes during `npm start` while the dev live server is running. All production files upon `npm run build` are output to the ./dist folder and can be ran by running `npm run production` which will start a live server running your production files.

## 💻 Commands:
### Install:
Install node_modules  
`npm install`
### Run development server:
Run the dev server with hot module reload and nodemon server auto restart<br>
`npm start`
### Build optimized server and client:
Build files are output to ./dist folder  
`npm run build` ( builds all files )
- `npm run build:server` ( builds only server production files )
- `npm run build:client` ( builds only client production files )
### Run optimized build:
Runs the optimized build from the ./dist folder  
`npm run production`  

### 📝 License:
MIT License | Fullstackinator © 2019 Kyle Gallagher