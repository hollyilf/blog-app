# blog-app

Deployed on cyclic: https://lazy-plum-caridea-tux.cyclic.app/ 

One of the challenges that I completed as part of the App Brewery’s Complete Web Development Bootcamp was to code a full-stack blog website using Node, Express, EJS and MongoDB. 

I was provided with starting files consisting of an app.js file set up to use express, EJS, body-parser and lodash; a views directory containing several empty files; and a public directory containing some external CSS styling. 

Throughout the challenge I: 
- Set up the header and footer using EJS partials 
- Set up the express server and the routes for all pages, including a post route to create a new blog 
- Added Bootstrap styling 
- Set up a loop to render all of the blogs on the homepage 
- Set up express route parameters for individual blog pages 
- Set up a local mongoose connection  
- Persisted the blog data  

After finishing the challenge, I decided to: 
- Update the styling, including adding a collapsable navbar 
- Make each post title the current time and date, and display the posts from newest to oldest 
- Set up a connection to MongoDB Atlas to deploy the website on cyclic
