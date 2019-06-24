
# Ambassador Coding Challenge

## Description of the problem and solution

#### The Problem
An overview of the problem was to create a basic referral app that demonstrated all CRUD operations and an understanding of foundational software engineering concepts.
In more detail, some problems faced with this application would be,
- Storing data in a database.
- Creating an Application Programming Interface to communicate with the database.
- Creating a presentable but functional UI for a user to interact with. 

#### My approach to the Solution
- To solve the problem, I first listed out on paper the HTTP endpoints I would need to implement for the API.
- I wrote down a basic model of an object that I would call my "Link" object which would have an Id, a title, and the number of clicks it has gotten by people going to his associated landing page.
- I then thought briefly about a UI and decided to follow the two page Example on the Coding instructions with a page for managing lists, and a landing page for each link which would result in an added click (or referral for associated link).
- I then chose my technologies, deciding to use Node.js and MongoDB to create a microservice that represented my backend. I chose React.js to create a microservice that represented my frontend.
- I started with my backend microservice, testing all HTTP endpoints using Postman on the desktop.
- with basic functionality on the backend, I built out the foundations for the UI.
- I then began a cycle of adding features to the UI to implement each HTTP endpoint needed and also refactoring the backend as needed.
- when the cycle ended I had complete functionality of the app.
- I then proceeded to style the frontend a bit to make it more presentable.


## Solution Focus

My Solution is a full-stack solution.


## Technical Reasoning

#### Overview

For my technical reasoning I will briefly address my decision to use...

- a Microservice architecture
- Node.js
- MongoDB
- React.js

#### Microservice architecture

I went with a microservice architecture because in my mind, it achieves better separation of concerns for client-side code and server-side code.
Microservice applications can scale easily with each microservice only needing to be responsible for its own functionality. Plus, testing and troubleshooting can almost always narrowed down to a singular microservice. 

#### Node.js

I chose to use Node.js because it is fast, uses NPM, and can be very powerful with very little lines of code. Node.js APIs are great with a microservice architecture because of its simplify, 3rd party library support and Asynchronous capabilities. In addition to these I am very comfortable with Node.js .

#### MongoDB

I chose MongoDB  as my database because its fast, its a no-sql database, and has excellent support when used with Node.js.

#### React.js

I chose React.js because it uses JavaScript, meaning I could use the same programming language for all my client and server side code. Also react.js is the most popular web framework right now and I am very familiar with it. 

## Trade offs, Features Skipped, what would be done with more time.

#### Trade offs

A trade off to using a microservice architecture is ensuring each microservice as access to the others while not exposing its self to vulnerabilities. 

#### Features Skipped

I thought about possibly adding the ability to redirect from a referral link directly back to the manage link page, but decided against it with the understanding that if a link were shared and a user were to click on the link, that user would not necessarily be a user that is authorized to manage the list of links.

#### What would be done with more time

If I were to spend more time on the project, I would add more styling and fix up the UI in the way that it interacts to responsiveness and make sure it looked better on a mobile device.

## Link to hosted application

The React.js frontend microservice is hosted on [Surge](https://surge.sh/) which hosts static webpages for free.
You can access it at [https://ref-react-frontend.surge.sh/](https://ref-react-frontend.surge.sh/)

The Node.js app which uses MongoDB Atlas as its MongoDB cloud provider is hosted on [Heroku](https://dashboard.heroku.com) running in a [Docker](https://www.docker.com/) container. it can be found at [https://refnodeapp.herokuapp.com/](https://refnodeapp.herokuapp.com/).

**Note: Cross Origin Resource Sharing (CORS)  is enabled for the heroku api. Allowed origins are http://localhost:3000 and https://ref-react-frontend.surge.sh . To use another origin you will need to pull the backend app and remove 'cors(corsOptions)' middleware for one or more routes in referral.js in the routes folder of the api.**

## My other projects!

Here are some of my other projects. I have developed each of these from end to end without any other contributors.
Links go to the repository for each application. 

- [Computer Vision Api Example](https://github.com/DaRiv94/ComputerVisionApiExample) - Full-Stack app that uses Microsoft Azure Cloud's Cognitive Services.
- [Geolocation](https://github.com/DaRiv94/FGR-Geolocation-App) - React front-end app that consumes external apis to find location.
- [FGR API Docs](https://github.com/DaRiv94/FGR-API-Docs) - React front-end app that consumes FGR APIs.
- [FGR Vidly API](https://github.com/DaRiv94/FGR-Vidly-API) - Back-end api built with Node.js and MongoDB.
- [FGR President API](https://github.com/DaRiv94/FGR-President-API) - Back-end api built with Node.js and Azure Table Storage.
- [FGR US Colony API](https://github.com/DaRiv94/USColoniesAzureFunction) - Back-end serverless api built with an Azure Function in the Azure cloud.

More information on each of these apps can be found at my portfolio website [http://frankieriviera.com/portfolio](http://frankieriviera.com/portfolio)

