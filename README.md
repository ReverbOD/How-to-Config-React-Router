# How to configure Router for React.JS

First of all, you need to create a react app:
- Open your terminal and write `$ npx create-react-app nameofyourapp` , or if you wanna use my react's setup `$ git clone https://github.com/ReverbOD/react-webpack.git`.
- If you use my setup, rename `react-webpack` with your app/website name. If you use the `$ npx create-react-app` you can skip this passage.
- Move inside your app folder with `$cd yourappname`.
- If you use my react setup you should install all dependencies, typing `$ npm i`
- We need install the [react-router-dom](https://www.npmjs.com/package/react-router-dom) typing `$ npm install --save react-router-dom`
- Create a folder for your components (like navbar, home, etc.) and export it. My solution is to export this with `export default () =>`.
- Then import all your components in `App.js` and set the App function to work with React Router.
- 
Or if you are lazy you can clone this repo typing `$ git clone https://github.com/ReverbOD/react-router-setup.git` (NB: I've use my react's setup).

This is a low code version, it's simply to use, and expand as you wish.