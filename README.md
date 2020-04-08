# DevConnector - MERN-Stack social network
A small social network for developers built with the MERN stack. Includes authentication using JWT web tokens. 
Uses the Context API for client-side state management.

You can check out the live project by clicking [here](https://mern-stack-app-social-network.herokuapp.com/).

# Quick Start
### Add a default.json file in config folder with the following
```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```
### Install server dependencies
```bash
npm install
```
### Install client dependencies
```bash
cd client
npm install
```
### Run both Express & React from root
```bash
npm run dev
```
### Build for production
```bash
cd client
npm run build
```
### Test production before deploy
```bash
NODE_ENV=production node server.js
```
Check in browser on [http://localhost:5000/](http://localhost:5000/)
