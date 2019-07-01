# News Scraper: SkySports Football Edition

This app allows users to view SkySports Football articles, save their favorites onto another page, and comment on their favorites. Each article displayed includes a headline, summary, and a link to the source article and a description that includes the date of publish. The app also lets you remove articles, that the user may have saved and then changed their mind. The app uses Node/Express for the server and routing, MongoDB/Mongoose for the database and models, Handlebars for the layout and views, & Cheerio/Request for scraping the data from www.skysports.com/football.

[Live Demo](https://murmuring-sands-38213.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. If you don't already have them, please install [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) locally. See deployment for notes on how to deploy the project on a live system.

1. Install dependencies
2. In your CLI, enter **mongod**
3. In a new CLI window, go to root of directory and enter **node server.js**
4. In browser, navigate to **http://localhost:3000**

### Dependencies

You will need to npm install the following node modules:

1. express
2. express-handlebars
3. mongoose
4. body-parser
5. cheerio
6. axios
7. morgan
8. request

Since I have included a package.json file, you do not need to install dependencies by name. Simply run the following in the root of your directory:

```
npm install
```

