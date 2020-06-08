# Router Configuration for React.JS

## I've used
First of all, you need to create a react app, to make this launch `npx create-react-app nameofyourapp`.

Then you need to install react-router-dom for web application to make router working fine. Install react router using the command:
`npm install react-router-dom`

## Steps
* Create `Routes.js` file to links all the pages you need for your app [(see repo)](https://github.com/ReverbOD/router-config/blob/master/src/Routes.js)
* Then you can create the page you needed for the `Routes.js`
* Modify the `index.js` file, to properly configure the BrowserRoutes [(see repo)](https://github.com/ReverbOD/router-config/blob/master/src/index.js)
* Modify `App.js` for rendering all the page [(see repo)](https://github.com/ReverbOD/router-config/blob/master/src/App.js)
* Modify `package.json` to include homepage property as below: `"homepage":"http://localhost:3000/routes-config"` (use the same name you used in `index.js` file on `basename={""}` of BrowserRouter configuration

 Now everything should work fine, to be sure run `npm start`
