# Weather App

This project was created using React and Express. 
Data is provided by calls to an API (metaweather.com/api). 
React fetches data the API through an Express server. 


## How does it work / What does it do

- The app is set up by default to show weather of 4 locations, cycling through them at a time interval
- Unavailable data shows "(N/A)"
- Additional cities can be added from the form at the bottom


## Style

Stylesheet provided by Bootstrap


## Additional packages

- The Express app uses "node-fetch" for fetch functionality
- The React app uses "concurrently" to start both apps with one command


## How to run the app

To run the app:
- clone the repository
- there are 2 folders, "back" for the Express app and "client" for the React app
- from the "back" folder, run "npm install" to install its dependencies
- from the "client" folder, run "npm install" to install its dependencies
- from the "client folder, run "npm run dev"
- client will be running on localhost:3000
- back will be running on localhost:5000
