# Travel Planner

This is an advanced travel planner app which helps you manage your trips. You can Add/remove and manage all of your future trips easily with an easy to use beautiful user interface.
![DeepinScreenshot_select-area_20200130071531](https://user-images.githubusercontent.com/28767301/73412963-629a6c00-4330-11ea-83b1-92c4dc8d7d50.png)

### Features

1. Ability to add Place, date, and Note.
2. Shows you image of your destination.
3. The app fetches and shows the weather forcast for your trip day.
4. App uses service worker and hence it also works offline.

# How to get started

1. Download the project folder
2. Go in the project directory using the terminal
3. Type ``` npm install ``` and press ENTER to install all of the project dependency
4. Type ``` npm start ``` and press ENTER to start the project.

The app will launch inside your default browser.

5. Now you can Add/remove and manage your trip information.

`
**IMPORTANT NOTE (For running the app locally)**

This project uses following external APIs-
1. GeoNames API
2. Pixabay API
3. DarkSky API

To run this project locally, you'll need API keys which you can get from their respective sites.

To avoid the misuse I have not provided my own API keys. You'll have to signup and get your own API key and create a .env file as follow-

A file ".env" must be present at the root of the project containing following environment variables-

```
PORT = 8000
GEONAMES_USERNAME= your_username
DARK_SKY_API_KEY= your_key
PIXABAY_API_KEY=your_key
```

## Live Demo-

Click this [Link](https://trip-manager-app.herokuapp.com/)
