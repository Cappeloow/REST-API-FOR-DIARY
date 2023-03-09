# REST API for a Diary Application
This is a REST API for a diary application, where users can login, and register a new account.
but they can also create, read, like posts, delete posts if it's your post and search for specific user by name,


## Technologies
* TypeScript
* Node.js
* Express.js
* MongoDB
* Mongoose



## Endpoints

POST http://localhost:3000/api/users/register
Content-Type: application/json

 {
    "username": "johan@hotmail.com",
    "password": "24240204"   
}


###


POST http://localhost:3000/api/users/login
Content-Type: application/json

{
    "username": "johan@hotmail.com",
    "password": "24240204"   
}

###
POST http://localhost:3000/api/post/send
Content-Type: application/json

{
    "user":"Johan",
    "title": "Måndag",
    "content": "Vilken dag det blev."   
}


###
 
 GET http://localhost:3000/api/post/all


###

 GET http://localhost:3000/api/post/public

###
POST http://localhost:3000/api/post/search
Content-Type: application/json

{
    "user":"kim"
}

###
DELETE http://localhost:3000/api/post/delete
Content-Type: application/json

{
    "user":"tomas",
    "_id":"6401c85c5d56be6eec84be68"
}


###
PUT http://localhost:3000/api/post/like
Content-Type: application/json

{
    "user":"Albin",
    "_id":"6401c9225d56be6eec84bf03"
}
