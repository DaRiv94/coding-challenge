
# Ambassador Coding Challenge

## Description of the problem and solution

#### The Problem
An overview of the problem was to create a basic referral app that demonstrated all CRUD operations and an understanding of foundational software engineering concepts.
In more detail, some problems faced with this application would be,
- Storing data in a database
- Creating an Application Programming Interface to communicate with the database
- Creating a UI for a user to interact with. 

#### My approach to the Solution
- To solve the problem I first listed out on paper the HTTP endpoints I would need to implment the API,
- I wrote down a basic model of an object that I would call my "Link" object which would have an Id, a title, and a numberOfClicks associated with it.
- I then thought briefly about a UI and decided to follow the two page Example on the Coding instructions with a page for manageing lists, and a page for each link which would result in an added click (or referral for associated link).
- I then choose my technologies, deciding to use Node.js and mongodb to create a microservice that represented my backend, and React.js to create a microservice that represented my frontend.
- I started with my backend microservice, testing all HTTP endpoints useing Postman on the desktop.
- with basic functionality on the backend, I built out the foundations for the UI.
- I then began a cycle of adding features to the UI to implement each HTTP endpoint needed and also refactoring the backend as needed.
- when the cycle ended I had complete functionality of the app.
- I then proceeded to style the frontend a bit to make it more presentable


## Solution Focus

My Solution is a full-stack solution.


## Technical Reasoning

#### Overview

For my technical reasoning I will briefly address decision to use...

- a Microservice architecture
- Node.js
- Mongodb
- React.js

#### Microservice architecture

I went with a microservice architecture beacuse in my mind it acheives better separation of concerns for your client side code and your server side code.
Microservice applications can scale easily with each microservice only being responible for its own functionality. Plus testing and trouble shooting can almost always narrowed down to a singular microservice.

#### Node.js

I choose to use Node.js beacuse it fast, uses NPM, and can be very powerful with very little lines of code. Node.js APIs are great with a microservice architecture beacuse of its simplicy, 3rd party library support and Asynchronus capablilites. In addition to these I am very comfortable with Node.js .

#### Mongodb

I choose Mongodb as my database beacuse its fast, its a no-sql database, and has exellect support when used with Node.js.

#### React.js

I choose React.js because it uses javascript meaning I could use the same client for all my client and server side code. React.js is the most popular web framework right now and I am very familiar with it. 

## TradeOffs, Features Skipped, what would be done with more time.

#### TradeOffs

a tradeoff to using a microservice architecture is ensuring each microservice as access to the others while not exposing its self to vunerablities. 

#### Features Skipped

I thought about possibliy added the ablity to redirect from a referral link directly back to the manage link page but decided agansit with the understanding that if a link were shared and a user were to click on the link, that user would not nesscarily be a user that is authorized to manage the list of links.

#### what would be done with more time

If I had more time I would add more styling and fix up the UI in the way that it interacts to responsiveness and make sure it looks good in a mobile device.

## Link to hosted application

The React.js frontend microservice is hosted on [Surge](https://surge.sh/) which hosts static webpages for free.
You can access it at [https://ref-react-frontend.surge.sh/](https://ref-react-frontend.surge.sh/)

The Node.js app whch uses MonngoDb Atlas as its mongodb cloud provider is hosted on [Heroku](https://dashboard.heroku.com) running in [Docker](https://www.docker.com/) a container. it can be found at [https://refnodeapp.herokuapp.com/](https://refnodeapp.herokuapp.com/)

**Note: Cors IS enabled for the api, allowed origins are http://localhost:3000 and https://ref-react-frontend.surge.sh . To use another origin you will need to pull the backend app and remove cors(corsOptions) middleware for a or more routes in referral.js in the routes folder of the api.**

## My other projects!

Here are some of my other projects. I have developed each of these from end to end without any other contributors.
links go to the repository for each application. 

- [Computer Vision Api Example](https://github.com/DaRiv94/ComputerVisionApiExample) - Full-Stack app that uses Microsoft Azure Cloud's Cognitive Services
- [GigHub](https://github.com/DaRiv94/GigHub) - Example full-stack ASP.NET Core app for concert lovers.
- [Geolocation](https://github.com/DaRiv94/FGR-Geolocation-App) - React front-end app that consumes external apis to find location.
- [FGR API Docs](https://github.com/DaRiv94/FGR-API-Docs) - React front-end app that consumes FGR APIs.
- [FGR Vidly API](https://github.com/DaRiv94/FGR-Vidly-API) - Back-end api built with Node.js and MongoDB.
- [FGR President API](https://github.com/DaRiv94/FGR-President-API) - Back-end api built with Node.js and Azure Table Storage.
- [FGR US Colony API](https://github.com/DaRiv94/USColoniesAzureFunction) - Back-end serverless api built with an Azure Function in the Azure cloud

More information on each of these apps can be found at my portfolio website [http://frankieriviera.com/portfolio](http://frankieriviera.com/portfolio)

