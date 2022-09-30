This application allows users to enter a username and get the full list of public Gists for that username.

# Setup and technologies used

The application was made using ```create-react-app```.

Packages required:
- axios
- frame-react-component

To install and run locally use
```
npm i
npm start
```

# Development

I didn't focus much on the UI/UX and chose to have the basic functionalities in place and a basic design.

I used axios to fetch data from the Gist API.

Gist API needs an authorization token which I stored in an environmental variable and for that reason is not present in the actual repository. 

The token needs to be replaced in the GistFetch.js component in the place of ```process.env.REACT_APP_TOKEN``` or in the ```.env.local``` file for the application to be working.


