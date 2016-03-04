CSE 5335 Project 1 - Spring 2016

a. What Server framework did you choose and why?

Server framework used to implement this project was Express.js

Express is a minimal and flexible open source Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed for building single-page, multi-page, and hybrid web applications and is also the de facto standard server framework for node.js.

b. What Client framework did you choose and why?

Client framework used to implement this project was jQuery

jQuery is a fast, small, and feature-rich open source JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. 

c. What aspect of the implementation did you find easy, if any, and why?

I found the following as aspects of the project easy:
1.Deploying the app on Heroku Server 
2.Coding the Server side using data queried from RESTful web service API 
3.Coding the html part on client side of web application 
4.Displaying information from JSON data on a chart

d. What aspect of the implementation did you find hard, if any, and why?

I found the following as aspects of the project a little hard because it took a little longer time understanding the concepts:
1.Displaying the JSON data in a table on the web page
2.Displaying dots of the information from JSON data on google maps

e. What components OTHER than your client and server framework did you install,if any, and if so, what is their purpose for your solution?

Other than Node.js and jquery I had to install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

f. What Ubuntu commands are required to deploy and run your server?
From Heroku : https://devcenter.heroku.com/articles/getting-started-with-nodejs

In terminal,
$heroku login
<enter email and password>

$git clone https://github.com/madhu6/cse5335-project-1.git
$cd cse5335-project-1

$heroku create
$git push heroku master
$heroku open
# cse5335-project-1
